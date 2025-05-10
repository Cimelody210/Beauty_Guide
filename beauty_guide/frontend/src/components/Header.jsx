import React from "react";
import { Link } from "react-router-dom";

const Header = ({ text }) => {
  return (
    <>
      {/* <!-- Header Start --> */}
      <div
        className="jumbotron jumbotron-fluid bg-jumbotron"
        style={{ marginBottom: "90px" }}
      >
        <div className="container text-center py-5">
          <h3 className="text-white display-3 mb-4">{text}</h3>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <Link className="text-white" to="/">
                Trang Chủ
              </Link>
            </p>
            <i className="far fa-circle px-3"></i>
            <p className="m-0">{text}</p>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
    </>
  );
};

export default Header;
