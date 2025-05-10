import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getItem, removeItem } from "../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import { USER_KEY } from "../constants/constants";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getItem(USER_KEY);

  const handleLogout = () => {
    removeItem(USER_KEY);
    navigate("/login");
  };

  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <Link to="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-primary">
              <span className="text-dark">SPA</span> Center
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div className="navbar-nav m-auto py-0">
              <Link
                to="/"
                className={`nav-item nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Trang chủ
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                Giới thiệu
              </Link>
              <Link
                to="/service"
                className={`nav-item nav-link ${
                  location.pathname === "/service" ? "active" : ""
                }`}
              >
                Dịch vụ
              </Link>
              <Link
                to="/price"
                className={`nav-item nav-link ${
                  location.pathname === "/price" ? "active" : ""
                }`}
              >
                Giá cả
              </Link>
              <Link
                to="/post"
                className={`nav-item nav-link ${
                  location.pathname === "/post" ? "active" : ""
                }`}
              >
                Bài viết
              </Link>
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Tổng hợp
                </Link>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link
                    to="/appointment"
                    className={`dropdown-item ${
                      location.pathname === "/appointment" ? "active" : ""
                    }`}
                  >
                    Lịch hẹn
                  </Link>
                  <Link
                    to="/opening"
                    className={`dropdown-item ${
                      location.pathname === "/opening" ? "active" : ""
                    }`}
                  >
                    Giờ mở cửa
                  </Link>
                  <Link
                    to="/team"
                    className={`dropdown-item ${
                      location.pathname === "/team" ? "active" : ""
                    }`}
                  >
                    Đội ngũ
                  </Link>
                  <Link
                    to="/testimonial"
                    className={`dropdown-item ${
                      location.pathname === "/testimonial" ? "active" : ""
                    }`}
                  >
                    Đánh Giá
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                className={`nav-item nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Liên hệ
              </Link>
            </div>
            <div className="d-flex align-items-center">
              {user ? (
                <button className="btn btn-danger mx-2" onClick={handleLogout}>
                  Đăng xuất
                </button>
              ) : (
                <>
                  <Link to="/register" className="btn btn-warning mx-2">
                    Đăng ký
                  </Link>
                  <Link to="/login" className="btn btn-secondary mx-2">
                    Đăng nhập
                  </Link>
                </>
              )}
              <Link to="/booking" className="btn btn-primary">
                Đặt ngay
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
