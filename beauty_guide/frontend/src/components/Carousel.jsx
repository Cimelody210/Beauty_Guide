import React, { useEffect } from "react";
const Carousel = () => {
  useEffect(() => {
    window.$('[data-ride="carousel"]').carousel();
  }, []);

  return (
    <div className="container-fluid p-0 mb-5 pb-5">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#header-carousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#header-carousel" data-slide-to="1"></li>
          <li data-target="#header-carousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active" style={{ minHeight: "100vh" }}>
            <img
              className="d-block w-100"
              src="img/carousel-1.jpg"
              alt="Massage Treatment"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h6
                  className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown"
                  style={{ letterSpacing: "3px" }}
                >
                  Spa & Beauty Center
                </h6>
                <h3 className="display-3 text-capitalize text-white mb-3">
                  Massage body
                </h3>
                <p className="mx-md-5 px-5">
                      
                </p>
                <a
                  className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp"
                  href="#"
                >
                  Đặt lịch hẹn
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item" style={{ minHeight: "100vh" }}>
            <img
              className="d-block w-100"
              src="img/carousel-2.jpg"
              alt="Facial Treatment"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h6
                  className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown"
                  style={{ letterSpacing: "3px" }}
                >
                  Spa & Beauty Center
                </h6>
                <h3 className="display-3 text-capitalize text-white mb-3">
                  Chăm sóc Da mặt
                </h3>
                <p className="mx-md-5 px-5">
                     
                </p>
                <a
                  className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp"
                  href="#"
                >
                  Đặt lịch hẹn
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item" style={{ minHeight: "100vh" }}>
            <img
              className="d-block w-100"
              src="img/carousel-3.jpg"
              alt="Cellulite Treatment"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h6
                  className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown"
                  style={{ letterSpacing: "3px" }}
                >
                  Spa & Beauty Center
                </h6>
                <h3 className="display-3 text-capitalize text-white mb-3">
                  Điều trị đá nóng
                </h3>
                <p className="mx-md-5 px-5">
                      
                </p>
                <a
                  className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp"
                  href="#"
                >
                  Đặt lịch hẹn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thêm nút điều hướng */}
        <a
          className="carousel-control-prev"
          href="#header-carousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#header-carousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
