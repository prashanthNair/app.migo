import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import SliderV2 from "./section-components/slider-v2";
import WorkProcessing from "./section-components/work-processing";
import Subscribe from "./section-components/subscribe";
import FooterV2 from "./global-components/footer-v2";

const WorkProcessingPage = () => {
  return (
    <div>
      <Navbar />
      <SliderV2 />
      <WorkProcessing customclass="pd-top-120" />
      <Subscribe />
      <FooterV2 />
    </div>
  );
};

export default WorkProcessingPage;
