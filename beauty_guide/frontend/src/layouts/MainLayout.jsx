import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Topbar */}
      <Topbar />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
