import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

class Features extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "image";

    return (
      <div>
        <div className="sba-featute-area">
          <div className="container">
            <div className="row custom-gutters-16 justify-content-center">
              <div className="col-xl-4 col-lg-9">
                <div className="section-title style-two text-justify">
                  <h2 className="title">
                    {parse(sectiondata.features.sectiontitle)}{" "}
                    <span>{sectiondata.features.sectiontitle_color}</span>
                  </h2>
                  <p>{sectiondata.features.short_description}</p>
                  <a className="read-more" href={sectiondata.features.btn_url}>
                    {sectiondata.features.btn_text}{" "}
                    <i className="la la-long-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-xl-4 col-sm-6">
                <div className="single-feature-left">
                  <div className="single-feature">
                    <div className="media">
                      <img
                        className="media-left"
                        src={publicUrl + "assets/img/features/1.png"}
                        alt="feature"
                      />
                      <div className="media-body">
                        <h6>Bringing New Customers everyday</h6>
                        <p>
                          Most important is to bring in new customers which is
                          crucial along with holding onto the customers you
                          already have.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-feature">
                    <div className="media border-radius-2">
                      <img
                        className="media-left"
                        src={publicUrl + "assets/img/features/2.png"}
                        alt="feature"
                      />
                      <div className="media-body">
                        <h6>Engage, Retain and Build loyal Customers</h6>
                        <p>
                          Holding onto the customers you already have and that’s
                          where customer engagement comes in.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 mg-top-80">
                <div className="single-feature-right">
                  <div className="single-feature">
                    <div className="media border-radius-3">
                      <img
                        className="media-left"
                        src={publicUrl + "assets/img/features/3.png"}
                        alt="feature"
                      />
                      <div className="media-body">
                        <h6>
                          Build, Maintain and Motivate the right employees/team
                        </h6>
                        <p>
                          Converging and reaping the interest instilled into
                          revenue generation is the core idea of the Migobucks
                          ecosystem.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-feature">
                    <div className="media border-radius-4">
                      <img
                        className="media-left"
                        src={publicUrl + "assets/img/features/4.png"}
                        alt="feature"
                      />
                      <div className="media-body">
                        <h6>Manage and Ensure the CX in every Stores</h6>
                        <p>
                          By using our Store Management System, brands can add
                          the Store and Store-type which will be added in their
                          proﬁle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
