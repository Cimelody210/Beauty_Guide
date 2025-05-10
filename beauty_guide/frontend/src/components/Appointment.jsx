import React from "react";

const Appointment = () => {
  return (
    <>
      {/* <!-- Appointment Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row mx-0 justify-content-center text-center">
            <div className="col-lg-6">
              <h6 className="d-inline-block bg-light text-primary text-uppercase py-1 px-2">
                Lịch hẹn
              </h6>
              <h1 className="mb-5">Đặt lịch hẹn</h1>
            </div>
          </div>
          <div className="row justify-content-center bg-appointment mx-0">
            <div className="col-lg-6 py-5">
              <div
                className="p-5 my-5"
                style={{ background: "rgba(33, 30, 28, 0.7)" }}
              >
                <h1 className="text-white text-center mb-4">
                  Đặt Lịch Hẹn
                </h1>
                <form>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control bg-transparent p-4"
                          placeholder="Nhập Tên"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="Tell"
                          className="form-control bg-transparent p-4"
                          placeholder="Số điện thoại"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <div
                          className="Ngày"
                          id="date"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control bg-transparent p-4 datetimepicker-input"
                            placeholder="Chọn Ngày"
                            data-target="#date"
                            data-toggle="datetimepicker"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <div
                          className="Giờ"
                          id="time"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control bg-transparent p-4 datetimepicker-input"
                            placeholder="Chọn Giờ"
                            data-target="#time"
                            data-toggle="datetimepicker"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <select
                          className="custom-select bg-transparent px-4"
                          style={{ height: "47px" }}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Chọn gói dịch vụ
                          </option>
                          <option value="1">Cơ bản</option>
                          <option value="2">Phổ Thông</option>
                          <option value="3">Cao Cấp</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                        style={{ height: "47px" }}
                      >
                        Đặt Lịch
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Appointment End --> */}
    </>
  );
};

export default Appointment;
