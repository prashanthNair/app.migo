import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ExeProgramListing from "./section-components/exe-program-listing";
import FooterV2 from "./global-components/footer-v2";

const ExecutiveProgram = () => {
    debugger;
  return (
    <div>
      <Navbar /> 
      <ExeProgramListing customclass="pd-top-120 bg-none" />
      <FooterV2 />
    </div>
  );
};

export default ExecutiveProgram;
