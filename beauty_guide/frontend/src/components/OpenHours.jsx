import React from "react";

const OpenHours = () => {
  return (
    <>
      {/* <!-- Open Hours Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/opening.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
              <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">
                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">
                  Thời gian làm việc
                </h6>
                <h1 className="mb-4">SPA Center</h1>
                <p>
                Chúng tôi luôn đặt phương châm “Trao Bạn Nét Đẹp Mà Tự Nhiên” lên đầu.
                </p>
                <ul className="list-inline">
                  <li className="h6 py-1">
                    <i className="far fa-circle text-primary mr-3"></i>Thứ Hai – Thứ Sáu
                    : 9:00 AM - 7:00 PM
                  </li>
                  <li className="h6 py-1">
                    <i className="far fa-circle text-primary mr-3"></i>Thứ Bảy
                    : 9:00 AM - 6:00 PM
                  </li>
                  <li className="h6 py-1">
                    <i className="far fa-circle text-primary mr-3"></i>Chủ Nhật :
                    Closed
                  </li>
                </ul>
                <a href="" className="btn btn-primary mt-2">
                  Đặt Lịch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Open Hours End --> */}
    </>
  );
};

export default OpenHours;
