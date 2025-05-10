import React from "react";
import Carousel from "../components/Carousel";
import Service from "../components/Service";
import OpenHours from "../components/OpenHours";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Carousel />
      {/* <!-- About Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 pb-5 pb-lg-0">
              <img className="img-fluid w-100" src="img/about.jpg" alt="" />
            </div>
            <div className="col-lg-6">
              <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">
                Về Chúng Tôi
              </h6>
              <h1 className="mb-4">Trung tâm chăm sóc da, làm đẹp và spa tốt nhất của bạn</h1>
              <p className="pl-4 border-left border-primary">
              Chúng tôi luôn đặt phương châm “Trao Bạn Nét Đẹp Mà Tự Nhiên” lên đầu.
              </p>
              <div className="row pt-3">
                <div className="col-6">
                  <div className="bg-light text-center p-4">
                    <h3
                      className="display-4 text-primary"
                      data-toggle="counter-up"
                    >
                      99
                    </h3>
                    <h6 className="text-uppercase">Đội Ngủ</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-light text-center p-4">
                    <h3
                      className="display-4 text-primary"
                      data-toggle="counter-up"
                    >
                      999
                    </h3>
                    <h6 className="text-uppercase">Khách Hàng</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
      <Service />
      <OpenHours />
      <Pricing />
      <Team />
      <Testimonial />
    </>
  );
};

export default Home;
