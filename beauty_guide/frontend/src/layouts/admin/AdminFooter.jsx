import React from "react";

const AdminFooter = () => {
  return (
    <footer className="admin-footer bg-light p-3 text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p className="m-0 text-muted">
              &copy; {new Date().getFullYear()} Admin Panel. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
