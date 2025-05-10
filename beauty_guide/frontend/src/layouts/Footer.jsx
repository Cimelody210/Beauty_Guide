import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div
        className="footer container-fluid position-relative bg-dark py-5"
        style={{ marginTop: "90px" }}
      >
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6 pr-lg-5 mb-5">
              <a href="index.html" className="navbar-brand">
                <h1 className="mb-3 text-white">
                  <span className="text-primary">SPA</span> Center
                </h1>
              </a>
              <p>
              Chúng tôi luôn đặt phương châm “Trao Bạn Nét Đẹp Mà Tự Nhiên” lên đầu.
              </p>
              <p>
                <i className="fa fa-map-marker-alt mr-2"></i>01 Phù Đỏng Thiên Vương, P.8, TP.Đà Lạt, Lâm Đồng
              
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2"></i>0899 577277
              </p>
              <p>
                <i className="fa fa-envelope mr-2"></i>2112997@dlu.edu.vn
              </p>
              <div className="d-flex justify-content-start mt-4">
                <a
                  className="btn btn-lg btn-primary btn-lg-square mr-2"
                  href="#"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square mr-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square mr-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-lg btn-primary btn-lg-square" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <div className="row">
                <div className="col-sm-6 mb-5">
                  <h5 className="text-white text-uppercase mb-4">
                  Liên kết nhanh
                  </h5>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white-50 mb-2" href="#">
                      <i className="fa fa-angle-right mr-2"></i>Trang Chủ
                    </a>
                    <a className="text-white-50 mb-2" href="#">
                      <i className="fa fa-angle-right mr-2"></i>Về Chúng Tôi
                    </a>
                    <a className="text-white-50 mb-2" href="#">
                      <i className="fa fa-angle-right mr-2"></i>Dịch vụ của chúng tôi
                    </a>
                    <a className="text-white-50 mb-2" href="#">
                      <i className="fa fa-angle-right mr-2"></i>Giá Cả
                    </a>
                    <a className="text-white-50" href="#">
                      <i className="fa fa-angle-right mr-2"></i>Liên hệ
                    </a>
                  </div>
                </div>
                <div className="col-sm-6 mb-5">
                  <h5 className="text-white text-uppercase mb-4">
                  Dịch vụ của chúng tôi
                  </h5>
                  <div className="d-flex flex-column justify-content-start">
                    <a className="text-white-50 mb-2" href="#">
                      <i className="fa fa-angle-right mr-2"></i>Body Massage
                    </a>
                    <a className="text-white-50 mb-2" href="#">
                      <i className="fa fa-angle-right mr-2"></i>Stone Therapy
                    </a>
                    <a className="text-white-50 mb-2" href="#">
                      <i className="fa fa-angle-right mr-2"></i>Facial Therapy
                    </a>
                    <a className="text-white-50 mb-2" href="#">
                      <i className="fa fa-angle-right mr-2"></i>Skin Care
                    </a>
                    <a className="text-white-50" href="#">
                      <i className="fa fa-angle-right mr-2"></i>Nail Care
                    </a>
                  </div>
                </div>
                <div className="col-sm-12 mb-5">
                  <h5 className="text-white text-uppercase mb-4">Đánh Giá</h5>
                  <div className="w-100">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-light"
                        style={{ padding: "30px" }}
                        placeholder="Your Email Address"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary px-4">
                          Đăng Nhập
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-light border-top py-4"
        style={{ borderColor: "rgba(256, 256, 256, .15)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0 text-white">
                &copy; <a href="#">spa center</a>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <p className="m-0 text-white">
                Nhóm 29 <a href="">Website làm đẹp</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
};

export default Footer;
