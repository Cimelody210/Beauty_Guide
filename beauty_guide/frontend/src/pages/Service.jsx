import React from "react";
import Testimonial from "../components/Testimonial";
import ServiceComponent from "../components/Service";
import Header from "../components/Header";

const Service = () => {
  return (
    <>
      <Header text="Dịch vụ" />
      <ServiceComponent />

      <Testimonial />
    </>
  );
};

export default Service;
