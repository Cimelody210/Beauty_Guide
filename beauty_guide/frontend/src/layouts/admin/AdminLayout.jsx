import React, { useState, useEffect, useRef } from "react";
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiPieChart,
  FiShoppingCart,
  FiLogOut,
  FiMenu,
  FiChevronDown,
  FiMail,
  FiBell,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./admin.css";
import AdminFooter from "./AdminFooter";
import { getItem, removeItem } from "../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import { USER_KEY } from "../../constants/constants";

const AdminLayout = ({ children, pageTitle }) => {
  const navigate = useNavigate();
  const user = getItem(USER_KEY);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isUsersOpen, setUsersOpen] = useState(false);

  // Add state for dropdowns
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [messagesOpen, setMessagesOpen] = useState(false);

  // Refs for dropdown elements
  const notificationsRef = useRef(null);
  const messagesRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSubMenu = (menuSetter) => {
    menuSetter((prev) => !prev);
  };

  const handleLogout = () => {
    removeItem(USER_KEY);
    navigate("/login");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
      if (messagesRef.current && !messagesRef.current.contains(event.target)) {
        setMessagesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <div
        className={`sidebar bg-dark text-white ${isSidebarOpen ? "show" : ""}`}
      >
        <div className="sidebar-header p-3 d-flex align-items-center justify-content-between">
          <h4 className="m-0 text-danger">Admin Panel</h4>
          <button
            className="btn btn-outline-light btn-sm d-md-none"
            onClick={toggleSidebar}
          >
            ✖
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/admin/dashboard" className="nav-link">
                <FiHome /> <span>Dashboard</span>
              </Link>
            </li>
            {/* Người dùng có submenu */}
            <li className="nav-item">
              <button
                className="nav-link d-flex justify-content-between align-items-center bg-transparent border-0 text-white w-100"
                onClick={() => toggleSubMenu(setUsersOpen)}
              >
                <span>
                  <FiUsers className="me-2" /> Người dùng
                </span>
                <FiChevronDown className={isUsersOpen ? "rotate-180" : ""} />
              </button>
              <ul
                className={`submenu list-unstyled ms-3 ${
                  isUsersOpen ? "d-block" : "d-none"
                }`}
              >
                <li>
                  <Link to="/admin/users" className="nav-link">
                    Danh sách
                  </Link>
                </li>
              </ul>
            </li>
            {/* Dịch vụ có submenu */}
            <li className="nav-item">
              <button
                className="nav-link d-flex justify-content-between align-items-center bg-transparent border-0 text-white w-100"
                onClick={() => toggleSubMenu(setServicesOpen)}
              >
                <span>
                  <FiShoppingCart className="me-2" /> Dịch vụ
                </span>
                <FiChevronDown className={isServicesOpen ? "rotate-180" : ""} />
              </button>
              <ul
                className={`submenu list-unstyled ms-3 ${
                  isServicesOpen ? "d-block" : "d-none"
                }`}
              >
                <li>
                  <Link to="/admin/services" className="nav-link">
                    Danh sách
                  </Link>
                </li>
                <li>
                  <Link to="/admin/services/add" className="nav-link">
                    Thêm mới
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/admin/reports" className="nav-link">
                <FiPieChart className="me-2" /> Thống kê
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/settings" className="nav-link">
                <FiSettings className="me-2" /> Cài đặt
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer p-3">
          <button
            className="btn btn-danger btn-sm w-100 d-flex align-items-center justify-content-center"
            onClick={handleLogout}
          >
            <FiLogOut className="mx-2" /> Đăng xuất
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light top-navbar shadow-sm">
          <div className="container-fluid">
            {/* Sidebar Toggle Button for Small Screens */}
            <button
              className="btn btn-primary d-md-none"
              onClick={toggleSidebar}
            >
              <FiMenu size={20} />
            </button>

            {/* Brand Logo */}
            <Link to="/admin/dashboard" className="navbar-brand ms-3 fw-bold">
              Admin Panel
            </Link>

            {/* Right-side Navigation */}
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav align-items-center">
                {/* Notifications Dropdown - FIXED */}
                <li className="nav-item dropdown" ref={notificationsRef}>
                  <button
                    type="button"
                    className="nav-link btn border-0 bg-transparent dropdown-toggle"
                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                    aria-expanded={notificationsOpen}
                  >
                    <FiBell size={20} className="mx-1" />
                    Thông báo
                  </button>
                  <ul
                    className={`dropdown-menu dropdown-menu-end ${
                      notificationsOpen ? "show" : ""
                    }`}
                    style={{ minWidth: "200px" }}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Thông báo 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Thông báo 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-center text-primary"
                        href="#"
                      >
                        Xem tất cả
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Messages Dropdown - FIXED */}
                <li className="nav-item dropdown mx-2" ref={messagesRef}>
                  <button
                    type="button"
                    className="nav-link btn border-0 bg-transparent dropdown-toggle"
                    onClick={() => setMessagesOpen(!messagesOpen)}
                    aria-expanded={messagesOpen}
                  >
                    <FiMail size={20} className="mx-1" />
                    Phản hồi
                  </button>
                  <ul
                    className={`dropdown-menu dropdown-menu-end ${
                      messagesOpen ? "show" : ""
                    }`}
                    style={{ minWidth: "200px" }}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Phản hồi 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Phản hồi 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-center text-primary"
                        href="#"
                      >
                        Xem tất cả
                      </a>
                    </li>
                  </ul>
                </li>

                {/* User Account Dropdown */}
                <li className="nav-item font-weight-bold">
                  <img
                    src={`${import.meta.env.VITE_BASE_URL}/images/users/${
                      user?.images ?? "default.jpg"
                    }`}
                    alt="User Avatar"
                    className="rounded-circle mx-4"
                    width="40"
                    height="40"
                  />
                  <span>{user?.name}</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Content Area */}
        <main className="content-area p-4">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb bg-light p-3">
              <li className="breadcrumb-item">
                <Link to="/admin">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {pageTitle}
              </li>
            </ol>
          </nav>

          {/* Page Content */}
          {children}
        </main>

        {/* Footer */}
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
