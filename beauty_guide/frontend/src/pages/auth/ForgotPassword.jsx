import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded" style={{ width: "400px" }}>
        <h3 className="text-center text-primary mb-3">Quên Mật Khẩu</h3>
        <p className="text-center text-muted">
          Nhập email của bạn và chúng tôi sẽ gửi hướng dẫn để đặt lại mật khẩu.
        </p>
        <form>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Nhập email của bạn"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Gửi yêu cầu
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-center mt-3">
          <Link to="/login" className="text-decoration-none text-primary">
            Quay lại đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
