import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Pricing = () => {
  return (
    <>
      {/* <!-- Pricing Start --> */}
      <div className="container-fluid bg-pricing" style={{ margin: "90px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/pricing.jpg"
                  style={{ objectFit: "cover" }}
                  alt="Pricing"
                />
              </div>
            </div>
            <div className="col-lg-7 pt-5 pb-lg-5">
              <div className="pricing-text bg-light p-4 p-lg-5 my-lg-5">
                <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={10}
                  nav
                  items={2}
                >
                  <div className="bg-white">
                    <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                      <h1 className="display-4 mb-0">
                        <small
                          className="align-top text-muted font-weight-medium"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        49
                        <small
                          className="align-bottom text-muted font-weight-medium"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          /Mo
                        </small>
                      </h1>
                      <h5 className="text-primary text-uppercase m-0">
                        Basic Plan
                      </h5>
                    </div>
                    <div className="p-4">
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Full
                        Body Massage
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Deep
                        Tissue Massage
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Hot
                        Stone Massage
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Tissue
                        Body Polish
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Foot &
                        Nail Care
                      </p>
                      <a href="" className="btn btn-primary my-2">
                        Order Now
                      </a>
                    </div>
                  </div>

                  <div className="bg-white">
                    <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                      <h1 className="display-4 mb-0">
                        <small
                          className="align-top text-muted font-weight-medium"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        99
                        <small
                          className="align-bottom text-muted font-weight-medium"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          /Mo
                        </small>
                      </h1>
                      <h5 className="text-primary text-uppercase m-0">
                        Family Plan
                      </h5>
                    </div>
                    <div className="p-4">
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Full
                        Body Massage
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Deep
                        Tissue Massage
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Hot
                        Stone Massage
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Tissue
                        Body Polish
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Foot &
                        Nail Care
                      </p>
                      <a href="" className="btn btn-primary my-2">
                        Order Now
                      </a>
                    </div>
                  </div>

                  <div className="bg-white">
                    <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                      <h1 className="display-4 mb-0">
                        <small
                          className="align-top text-muted font-weight-medium"
                          style={{ fontSize: "22px", lineHeight: "45px" }}
                        >
                          $
                        </small>
                        149
                        <small
                          className="align-bottom text-muted font-weight-medium"
                          style={{ fontSize: "16px", lineHeight: "40px" }}
                        >
                          /Mo
                        </small>
                      </h1>
                      <h5 className="text-primary text-uppercase m-0">
                        VIP Plan
                      </h5>
                    </div>
                    <div className="p-4">
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Full
                        Body Massage
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Deep
                        Tissue Massage
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Hot
                        Stone Massage
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Tissue
                        Body Polish
                      </p>
                      <p>
                        <i className="fa fa-check text-success mr-2"></i>Foot &
                        Nail Care
                      </p>
                      <a href="" className="btn btn-primary my-2">
                        Order Now
                      </a>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pricing End --> */}
    </>
  );
};

export default Pricing;
