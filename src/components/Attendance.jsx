import React, { useState } from "react";
import Sidebar from "./Sidebar";
import LeaveRequest from "./LeaveRequest";
import "../styles/attendance.css";
import EmployeeList from "./EmployeeList";
import empp from "../assets/icons/empp.svg";
import notify from "../assets/icons/notify.svg";
import userimg from "../assets/icons/user-img.png";
import dropdown from "../assets/icons/dropdown.svg";
import areq from "../assets/icons/areq.svg";

const Attendance = () => {
  const [showLeaveRequest, setShowLeaveRequest] = useState(false);
  const [showAttendances, setShowAttendances] = useState(false);

  const handleBack = () => {
    setShowLeaveRequest(false);
    setShowAttendances(false);
  };

  return (
    <div className="attendance-container">
      <Sidebar />
      <div className="attendance-content">
        {showLeaveRequest || showAttendances ? (
          <div className="leave-request-section">
            <button
              className="back-button"
              onClick={handleBack}
              aria-label="Back to attendance"
            >
              <i className="ti ti-arrow-left" />
              Back to Attendance
            </button>
            {showLeaveRequest && <LeaveRequest />}
            {showAttendances && <EmployeeList/>}
          </div>
        ) : (
          <div className="attendance-main">
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

            <h1 className="attendance-title">Attendance</h1>

            <div className="attendance-options">
              <div
                className="option-item"
                onClick={() => setShowLeaveRequest(true)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setShowLeaveRequest(true);
                  }
                }}
                aria-label="Open leave request"
              >
                <img
                  src={empp}
                  alt="Leave Request"
                  className="option-icon"
                />
                <span>Leave Request</span>
              </div>

              <div
                className="option-item"
                onClick={() => setShowAttendances(true)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setShowAttendances(true);
                  }
                }}
                aria-label="Open attendances"
              >
                <img
                  src={areq}
                  alt="Attendances"
                  className="option-icon"
                />
                <span>Attendances</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;
