import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/admin/AdminLayout";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Pricing from "./pages/Pricing";
import OpenHours from "./pages/OpenHours";
import Team from "./pages/Team";
import Testimonial from "./components/Testimonial";
import Appointment from "./pages/Appointment";
import Post from "./pages/Post";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Booking from "./pages/Booking";
import ServiceDetail from "./pages/ServiceDetail";
import PostDetail from "./pages/PostDetail";
import Dashboard from "./pages/admin/Dashboard";
import AdminNotFoundPage from "./pages/admin/AdminNotFoundPage";
import Setting from "./pages/admin/Setting";
import Report from "./pages/admin/Report";
import IndexUser from "./pages/admin/users/Index";
import IndexService from "./pages/admin/services/Index";
import Add from "./pages/admin/services/Add";
import Edit from "./pages/admin/services/Edit";
import ProtectedRoute from "./utils/ProtectedRoute";
import ForbiddenPage from "./pages/ForbiddenPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* USER ROUTES */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/home"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/service"
          element={
            <MainLayout>
              <Service />
            </MainLayout>
          }
        />
        <Route
          path="/service-detail/:id"
          element={
            <MainLayout>
              <ServiceDetail />
            </MainLayout>
          }
        />
        <Route
          path="/price"
          element={
            <MainLayout>
              <Pricing />
            </MainLayout>
          }
        />
        <Route
          path="/post"
          element={
            <MainLayout>
              <Post />
            </MainLayout>
          }
        />
        <Route
          path="/post-detail/:id"
          element={
            <MainLayout>
              <PostDetail />
            </MainLayout>
          }
        />
        <Route
          path="/appointment"
          element={
            <MainLayout>
              <Appointment />
            </MainLayout>
          }
        />
        <Route
          path="/opening"
          element={
            <MainLayout>
              <OpenHours />
            </MainLayout>
          }
        />
        <Route
          path="/team"
          element={
            <MainLayout>
              <Team />
            </MainLayout>
          }
        />
        <Route
          path="/testimonial"
          element={
            <MainLayout>
              <Testimonial />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout>
              <Register />
            </MainLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <MainLayout>
              <ForgotPassword />
            </MainLayout>
          }
        />
        <Route
          path="/booking"
          element={
            <MainLayout>
              <Booking />
            </MainLayout>
          }
        />
        {/* ADMIN ROUTES */}
        <Route
          path="/admin/*"
          element={<ProtectedRoute allowedRoles={["admin"]} />}
        >
          <Route path="" element={<Navigate to="dashboard" replace />} />
          <Route
            path="dashboard"
            element={
              <AdminLayout pageTitle="Dashboard">
                <Dashboard />
              </AdminLayout>
            }
          />
                    <Route
            path="users"
            element={
              <AdminLayout pageTitle="Người dùng / Danh sách">
                <IndexUser />
              </AdminLayout>
            }
          />
          <Route
            path="services"
            element={
              <AdminLayout pageTitle="Dịch vụ / Danh sách">
                <IndexService />
              </AdminLayout>
            }
          />
          <Route
            path="services/add"
            element={
              <AdminLayout pageTitle="Dịch vụ / Thêm mới">
                <Add />
              </AdminLayout>
            }
          />
          <Route
            path="services/edit/:id"
            element={
              <AdminLayout pageTitle="Dịch vụ / Chỉnh sửa">
                <Edit />
              </AdminLayout>
            }
          />
          <Route
            path="reports"
            element={
              <AdminLayout pageTitle="Thống kê">
                <Report />
              </AdminLayout>
            }
          />
          <Route
            path="settings"
            element={
              <AdminLayout pageTitle="Cài đặt">
                <Setting />
              </AdminLayout>
            }
          />
          <Route path="*" element={<AdminNotFoundPage />} />
        </Route>
        <Route path="/403" element={<ForbiddenPage />} />
        {/* NOT FOUND PAGE */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
