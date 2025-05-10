import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header text="Liên hệ" />

      {/* <!-- Contact Start --> */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-absolute w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4670.731092804939!2d108.44162997574591!3d11.95456563635783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317112d959f88991%3A0x9c66baf1767356fa!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyDEkMOgIEzhuqF0!5e1!3m2!1svi!2s!4v1742546282216!5m2!1svi!2s"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
              <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">
                  Liên hệ
                </h6>
                <h1 className="mb-4">Liên hệ với chúng tôi</h1>
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="form-row">
                    <div className="col-sm-6 control-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        id="name"
                        placeholder="Họ & Tên"
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="col-sm-6 control-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        id="email"
                        placeholder="Email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      id="subject"
                      placeholder="Tiêu đề"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control border-0 py-3 px-4"
                      rows="3"
                      id="message"
                      placeholder="Nội dung"
                      required="required"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary py-3 px-4"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Gửi lời nhắn
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  );
};

export default Contact;
