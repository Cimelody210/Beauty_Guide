import React from "react";

const Topbar = () => {
  return (
    <>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid bg-light d-none d-lg-block">
        <div className="row py-2 px-lg-5">
          <div className="col-lg-6 text-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <small>
                <i className="fa fa-phone-alt mr-2"></i>0899 577277
              </small>
              <small className="px-3">|</small>
              <small>
                <i className="fa fa-envelope mr-2"></i>2112997@dlu.edu.vn
              </small>
            </div>
          </div>
          <div className="col-lg-6 text-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-primary px-2" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-primary px-2" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-primary px-2" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-primary px-2" href="">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-primary pl-2" href="">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}
    </>
  );
};

export default Topbar;
