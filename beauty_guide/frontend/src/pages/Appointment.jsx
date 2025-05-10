import React from "react";
import Header from "../components/Header";
import OpenHours from "../components/OpenHours";
import AppointmentComponent from "../components/Appointment";

const Appointment = () => {
  return (
    <>
      <Header text="Lịch hẹn" />

      <AppointmentComponent />
      <OpenHours />
    </>
  );
};

export default Appointment;
