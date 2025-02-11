import React, { useState } from "react";
import "../styles/employee.css";
import Sidebar from "./Sidebar";
import EmployeeList from "./EmployeeList";
import empp from "../assets/icons/empp.svg";
import org from "../assets/icons/org.svg";
import back from "../assets/icons/back.svg";
import notify from "../assets/icons/notify.svg";
import userimg from "../assets/icons/user-img.png";
import dropdown from "../assets/icons/dropdown.svg";
const Employee = () => {
  const [activeView, setActiveView] = useState("tabs"); // 'tabs' or 'employee' or 'orgConfig'

  const renderContent = () => {
    switch (activeView) {
      case "tabs":
        return (
          <>
            <div className="title-section">
              <h1 className="title">Employee</h1>
            </div>

            <div className="nav-tabs">
              <div
                className="tab-item"
                onClick={() => setActiveView("employee")}
              >
                <img
                  src={empp}
                  alt="Employee"
                  className="tab-icon"
                />
                <span>Employee</span>
              </div>
              <div
                className="tab-item"
                onClick={() => setActiveView("orgConfig")}
              >
                <img
                  src={org}
                  alt="Org Config"
                  className="tab-icon config"
                />
                <span>Org Config</span>
              </div>
            </div>
          </>
        );
      case "employee":
        return (
          <div className="full-page-view">
            <div className="view-header">
              <button
                className="back-button"
                onClick={() => setActiveView("tabs")}
              >
                <img
                  src={back}
                  alt="Back"
                  className="back-icon"
                />
                Back
              </button>
              <h1 className="title">Employee List</h1>
            </div>
            <EmployeeList />
          </div>
        );
      case "orgConfig":
        return (
          <div className="full-page-view">
            <div className="view-header">
              <button
                className="back-button"
                onClick={() => setActiveView("tabs")}
              >
                <img
                  src={back}
                  alt="Back"
                  className="back-icon"
                />
                Back
              </button>
              <h1 className="title">Organization Configuration</h1>
            </div>
            <div className="org-config-content">
              <h2>Organization Configuration Content</h2>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="employee-container">
      <Sidebar />
      <div className="main-content">
      <div className="navbar">
            <div className="search-box">
               <input type="text" placeholder="Search..." />
            </div>
            <div className="user-section">
              <img
              src={notify}
                alt="notifications"
                className="nav-icon"
              />
              <div className="user-profile">
                <img
                  src={userimg}
                  alt="profile"
                  className="profile-image"
                />
                <div className="profile-name">
                  Admirra John
                  <img
                    src={dropdown}
                    alt="dropdown"
                    className="nav-icon"
                  />
                </div>
              </div>
            </div>
          </div>

        <div className="content-area">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Employee;
