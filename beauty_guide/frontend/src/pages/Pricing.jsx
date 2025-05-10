import React from "react";
import PricingComponent from "../components/Pricing";
import OpenHours from "../components/OpenHours";
import Header from "../components/Header";

const Pricing = () => {
  return (
    <>
      <Header text="Giá cả" />

      <PricingComponent />

      <OpenHours />
    </>
  );
};

export default Pricing;
