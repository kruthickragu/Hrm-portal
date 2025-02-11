import React from "react";
import { useLocation } from "react-router-dom";
import EmployeeList from "./EmployeeList";
import DashboardContent from "./DashboardContent";

const TabContent = () => {
  const location = useLocation();
  const path = location.pathname.slice(1); // Remove leading slash

  const renderContent = () => {
    switch (path) {
      case "employee":
        return <EmployeeList />;
      case "dashboard":
        return <DashboardContent />;
      case "attendance":
        return <h1 className="title">Attendance Management</h1>;
      case "payroll":
        return <h1 className="title">Payroll Management</h1>;
      case "task":
        return <h1 className="title">Task Management</h1>;
      case "announcement":
        return <h1 className="title">Announcements</h1>;
      case "support":
        return <h1 className="title">Support Center</h1>;
      case "settings":
        return <h1 className="title">Settings</h1>;
      default:
        return <h1 className="title">Welcome to WeHR</h1>;
    }
  };

  return (
    <div className="content-area">
      <div className="title-section">{renderContent()}</div>
    </div>
  );
};

export default TabContent;
