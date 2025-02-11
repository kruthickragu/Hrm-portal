import React from "react";
import { NavLink} from "react-router-dom";
import "../styles/sidebar.css";
import dashboardico from "../assets/icons/dashboardico.svg";
import empico from "../assets/icons/empico.svg";
import attenico from "../assets/icons/attenico.svg";
import pay from "../assets/icons/pay.svg";
import taski from "../assets/icons/taski.svg";
import annico from "../assets/icons/annico.svg";
import sup from "../assets/icons/sup.svg";
import seti from "../assets/icons/seti.svg";
const Sidebar = () => {
  

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="logo">WeHR</div>
        <div className="nav-section">
          <div className="nav-items">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <img
                src={dashboardico}
                alt="Dashboard"
                className="nav-icon"
              />
              <span className="nav-text">Dashboard</span>
            </NavLink>

            <NavLink
              to="/employee"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <img
                src={empico}
                alt="Employee"
                className="nav-icon"
              />
              <span className="nav-text">Employee</span>
            </NavLink>

            <NavLink
              to="/attendance"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <img
                src={attenico}
                alt="Attendance"
                className="nav-icon"
              />
              <span className="nav-text">Attendance</span>
            </NavLink>

            <NavLink
              to="/payroll"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <img
                src={pay}
                alt="PayRoll"
                className="nav-icon"
              />
              <span className="nav-text">PayRoll</span>
            </NavLink>

            <NavLink
              to="/task"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <img
                src={taski}
                alt="Task"
                className="nav-icon"
              />
              <span className="nav-text">Task</span>
            </NavLink>

            <NavLink
              to="/announcement"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <img
                src={annico}
                alt="Announcement"
                className="nav-icon"
              />
              <span className="nav-text">Announcement</span>
            </NavLink>
          </div>
        </div>

        <div className="other-section">
          <div className="other-header">OTHER</div>
          <div className="nav-items">
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <img
                src={sup}
                alt="Support"
                className="nav-icon"
              />
              <span className="nav-text">Support</span>
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <img
                src={seti}
                alt="Settings"
                className="nav-icon"
              />
              <span className="nav-text">Settings</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
