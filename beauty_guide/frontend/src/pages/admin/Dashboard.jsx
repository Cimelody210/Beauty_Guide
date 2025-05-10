import React, { useEffect, useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/dashboard`)
      .then((response) => setDashboardData(response.data.data))
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);

  if (!dashboardData) {
    return <p>Loading...</p>;
  }

  const lineData = {
    labels: ["Người dùng", "Loại dịch vụ", "Bài viết", "Bình luận"],
    datasets: [
      {
        label: "Phân loại",
        data: [
          dashboardData.users[0].total,
          dashboardData.categories[0].total,
          dashboardData.posts[0].total,
          dashboardData.comments[0].total,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  const doughnutData = {
    labels: ["Người dùng", "Loại dịch vụ", "Bài viết", "Bình luận"],
    datasets: [
      {
        data: [
          dashboardData.users[0].total,
          dashboardData.categories[0].total,
          dashboardData.posts[0].total,
          dashboardData.comments[0].total,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <DashboardCard
          title="Tổng người dùng"
          value={dashboardData.users[0].total}
        />
        <DashboardCard
          title="Tổng danh mục"
          value={dashboardData.categories[0].total}
        />
        <DashboardCard
          title="Tổng bài viết"
          value={dashboardData.posts[0].total}
        />
        <DashboardCard
          title="Tổng bình luận"
          value={dashboardData.comments[0].total}
        />
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Thống kê tổng quan</div>
            <div className="card-body">
              <Line data={lineData} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{ maxWidth: "400px" }}>
            <div className="card-header">Tỷ lệ thành phần</div>
            <div className="card-body">
              <Doughnut data={doughnutData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value }) => (
  <div className="col-md-3">
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h2>{value}</h2>
      </div>
    </div>
  </div>
);

export default Dashboard;
