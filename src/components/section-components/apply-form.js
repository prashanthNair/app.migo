import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class ApplyForm extends Component {
  render() {
    let customclass = this.props.customclass ? this.props.customclass : "";
    let data = sectiondata.JobAplly;

    return (
      <div>
        <div className={""}>
          <div className="">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-10">
                <div className="section-title text-center">
                  <h2 className="title">{data.sectiontitle}</h2>
                  <p>{data.sectionsubtitle}</p>
                </div>
                <div className="job-apply-area">
                  <form className="riyaqas-form-wrap">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="single-input"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input
                            type="email"
                            placeholder="Email"
                            className="single-input"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input
                            placeholder="Contact Number"
                            type="phone"
                            className="single-input"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-input-wrap">
                          <input
                            placeholder="Date for joining"
                            type="date"
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
                            defaultValue={""}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12"></div>
                      <div className="col-12 text-center">
                        <button className="btn btn-blue" href="#">
                          Submit
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
}

export default ApplyForm;
