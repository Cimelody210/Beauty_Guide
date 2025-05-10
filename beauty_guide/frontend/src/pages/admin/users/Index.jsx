import React, { useEffect, useState } from "react";
import axios from "axios";
import FormatDatetime from "../../../utils/FormatDatetime";
import { Pagination } from "../../../utils/Pagination";
import "bootstrap-icons/font/bootstrap-icons.css";

const Index = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginator, setPaginator] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getUsers = async (page = 1) => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/users?page=${page}&limit=10`)
      .then((response) => {
        setUsers(response.data.data.users);
        setPaginator(response.data.data.paginator);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
        setError("Có lỗi xảy ra khi tải dữ liệu người dùng");
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getUsers(currentPage);
  }, [currentPage]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">{error}</div>
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">📋 Quản lý người dùng</h3>
        <button className="btn btn-primary d-flex align-items-center gap-1">
          <i className="bi bi-plus-lg"></i> Thêm người dùng
        </button>
      </div>

      {/* Filter/Search */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3 align-items-center">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="🔍 Tìm kiếm người dùng..."
                />
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option>Tất cả vai trò</option>
                <option>Admin</option>
                <option>User</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="card shadow-sm">
        <div className="card-body table-responsive p-0">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Vai trò</th>
                <th>Ngày tạo</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>
                    {user.images ? (
                      <img
                        src={`${import.meta.env.VITE_BASE_URL}/images/users/${
                          user.images ?? "default.jpg"
                        }`}
                        alt="User Avatar"
                        className="rounded-circle border"
                        width="40"
                        height="40"
                      />
                    ) : (
                      <div
                        className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}
                      >
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span
                      className={`badge rounded-pill text-white ${
                        user.role === "admin" ? "bg-success" : "bg-primary"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td>{FormatDatetime(user.created_at)}</td>
                  <td>
                    <div className="btn-group">
                      <button className="btn btn-sm btn-outline-primary">
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <Pagination paginator={paginator} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Index;
