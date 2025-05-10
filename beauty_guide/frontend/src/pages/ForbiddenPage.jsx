import React from "react";
import { Link } from "react-router-dom";

const ForbiddenPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 text-danger fw-bold">403</h1>
        <h3 className="text-dark">
          Ôi không! Bạn không có quyền truy cập trang này! 🚫
        </h3>
        <p className="text-muted">
          Có vẻ như bạn không có quyền để xem nội dung này. Vui lòng kiểm tra
          lại quyền truy cập của bạn.
        </p>
        <Link to="/" className="btn btn-danger mt-3">
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default ForbiddenPage;
