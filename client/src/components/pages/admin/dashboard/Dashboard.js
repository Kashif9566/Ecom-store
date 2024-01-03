import React from "react";
import Sidebar from "../../../admin/Sidebar";
import Nav from "../../../admin/Nav";

const Dashboard = () => {
  return (
    <div>
      <div className="row g-0">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
