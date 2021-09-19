import React, { Component, useState } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

function ApplyForm(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [note1, setNote1] = useState("");
  const [note, setNote] = useState("");

  let customclass = props.customclass ? props.customclass : "";
  let data = sectiondata.JobAplly;

  console.log(props);

  const handleFormSubmit = React.useCallback(
    (ev) => {
      ev.preventDefault();
      if (props.onApply) {
        console.log("a");
        props.onApply({
          fullName,
          email,
          phone,
          joinDate,
          note1,
          note,
          experience,
          qualification,
        });
      }
    },
    [email, fullName, joinDate, note, note1, phone, props]
  );

  return (
    <div>
      <div className={""}>
        <div className="">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10">
              <div className="section-title text-center">
                <h2 className="title">{data.sectiontitle}</h2>
                {/* <p>{data.sectionsubtitle}</p> */}
              </div>
              <div className="job-apply-area">
                <form
                  autoComplete={false}
                  onSubmit={handleFormSubmit}
                  className="riyaqas-form-wrap"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input
                          type="text"
                          autoComplete="none"
                          placeholder="Full Name"
                          className="single-input"
                          value={fullName}
                          onChange={(ev) => setFullName(ev.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input
                          type="email"
                          autoComplete="none"
                          placeholder="Email"
                          value={email}
                          onChange={(ev) => setEmail(ev.target.value)}
                          className="single-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input
                          autoComplete="none"
                          placeholder="Contact Number"
                          type="phone"
                          value={phone}
                          onChange={(ev) => setPhone(ev.target.value)}
                          className="single-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input
                          placeholder="Date for joining"
                          type="text"
                          autoComplete="none"
                          onFocus={(e) => {
                            e.currentTarget.type = "date";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.type = "text";
                            e.currentTarget.placeholder = "Date for joining";
                          }}
                          onChange={(ev) => setJoinDate(ev.target.value)}
                          className="single-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input
                          autoComplete="none"
                          placeholder="Qualification"
                          type="text"
                          value={qualification}
                          onChange={(ev) => setQualification(ev.target.value)}
                          className="single-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-input-wrap">
                        <input
                          placeholder="Experience (If any)"
                          type="text"
                          autoComplete="none"
                          value={experience}
                          onChange={(ev) => setExperience(ev.target.value)}
                          className="single-input"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <textarea
                          placeholder="Why Join Migobucks?"
                          className="single-input"
                          autoComplete="none"
                          value={note1}
                          onChange={(ev) => setNote1(ev.target.value)}
                          cols={20}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-input-wrap">
                        <textarea
                          placeholder="Note"
                          className="single-input"
                          cols={20}
                          autoComplete="none"
                          value={note}
                          onChange={(ev) => setNote(ev.target.value)}
                          defaultValue={""}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12"></div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-blue">
                        Make Payment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyForm;
