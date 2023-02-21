import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();


  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
            </p>
          </div>
          <div className="dashboardSummaryBox2">
          </div>
        </div>

        <div className="lineChart">
        </div>

        <div className="doughnutChart">
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
