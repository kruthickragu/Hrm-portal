import React from "react";
import "../styles/employee.css";
import Sidebar from "./Sidebar";
import TabContent from "./TabContent";
import notify from "../assets/icons/notify.svg";
import userimg from "../assets/icons/user-img.png";
import dropdown from "../assets/icons/dropdown.svg";
const Dashboard = () => {
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
        </div>
        

        <TabContent />
      </div>

  );
};

export default Dashboard;
