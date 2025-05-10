import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 text-primary fw-bold">404</h1>
        <h3 className="text-dark">Ôi trời! Trang này trốn đi mất rồi! 🏃💨</h3>
        <p className="text-muted">
          Trang bạn đang tìm kiếm có thể đã bị xóa hoặc không tồn tại.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
