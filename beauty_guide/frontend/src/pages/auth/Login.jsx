import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { getItem, setItem, removeItem } from "../../utils/LocalStorage";
import { USER_KEY } from "../../constants/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Auto-fill email and password if saved
  useEffect(() => {
    const savedEmail = getItem("rememberedEmail");
    const savedPassword = getItem("rememberedPassword");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
          email,
          password,
        }
      );

      if (response.data.status) {
        if (rememberMe) {
          setItem("rememberedEmail", email);
          setItem("rememberedPassword", password);
        } else {
          removeItem("rememberedEmail");
          removeItem("rememberedPassword");
        }

        setItem(USER_KEY, response.data.data[0]);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: response.data.message,
          toast: true,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        if (response.data.data[0].role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại!"
      );
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded" style={{ width: "400px" }}>
        <h3 className="text-center text-primary mb-3">Đăng Nhập</h3>
        {error && (
          <div className="alert alert-danger">
            {Array.isArray(error)
              ? error.map((err) => <div key={err.path}>{err.msg}</div>)
              : error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="remember">
                Nhớ mật khẩu
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-decoration-none text-primary"
            >
              Quên mật khẩu?
            </Link>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100">
            Đăng nhập
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center mt-3">
          Chưa có tài khoản?{" "}
          <Link to="/register" className="text-decoration-none text-primary">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
