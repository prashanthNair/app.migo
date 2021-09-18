import React, { Component, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";
import { Drawer } from "rsuite";
import useRazorpay from "react-razorpay";
import JobApplyForm from "../job-apply";
import sectiondata from "../../data/sections.json";
import { creatPayment } from "../../api/payment";
import parse from "html-react-parser";

function Job_Listing(props) {
  const { id } = useParams();
  const Razorpay = useRazorpay();

  const [jobData, setJobData] = useState({
    jobId: "",
    jobtitle: "",
    date: "",
    icon: "",
    description: "",
    amount: 0,
  });

  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  let publicUrl = process.env.PUBLIC_URL + "/";
  let imgattr = "image";
  let data = sectiondata.joblisting;
  let customclass = props.customclass ? props.customclass : "";

  useEffect(() => {
    const job = sectiondata.joblisting.job.find((el) => el.jobId === id);
    setJobData(job);
  }, [id]);

  const handleDrawerClose = useCallback(() => setDrawerOpen(false), []);

  const handleJobApply = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const handlePayment = useCallback(
    async (job) => {
      setLoading(true);

      const payload = {
        amount: job.amount * 100,
        currency: "INR",
        receipt: `1`,
      };
      const payment = await creatPayment(payload);
      const paymentOptions = {
        key: "rzp_test_uBwzaVYIfyWlm7", // Enter the Key ID generated from the Dashboard
        amount: job.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Migobucks",
        description: job.jobtitle,
        image:
          process.env.NODE_ENV === "production"
            ? `https://dev.migobucks.com/${job.icon}`
            : ``,
        order_id: payment.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);

          // -> Migo's webhook
          // redirect -> Payment Sucess
          // await -> lambda
        },
        prefill: {},
        notes: {
          jobTitle: job.jobTitle,
          jobId: job.jobId,
        },
        theme: {
          color: "#2575BB",
        },
      };

      setLoading(false);
      const rzp1 = new Razorpay(paymentOptions);
      rzp1.open();
    },
    [Razorpay]
  );

  return (
    <div>
      <div className={"job-details-area " + customclass}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 offset-xl-1">
              <div className="section-title">
                <h2 className="title">Job Details</h2>
              </div>
              <h6
                style={{
                  color: "#ED536C",
                  fontWeight: "bold",
                  fontSize: "35px",
                  lineHeight: "45px",
                }}
                className="title"
              >
                {jobData.jobtitle}
              </h6>
              <span>
                <hr />
              </span>
              <div dangerouslySetInnerHTML={{ __html: jobData.description }} />
              {loading ? (
                <PuffLoader
                  speedMultiplier={1.5}
                  loading={loading}
                  color={"#2575BB"}
                />
              ) : (
                <button
                  onClick={() => handleJobApply({ ...jobData })}
                  className="job-apply-btn"
                >
                  Apply Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Drawer onHide={handleDrawerClose} show={drawerOpen}>
        <Drawer.Body>
          <JobApplyForm />
        </Drawer.Body>
      </Drawer>
    </div>
  );
}

export default Job_Listing;
