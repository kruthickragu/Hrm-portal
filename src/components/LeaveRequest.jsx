import React, { useState } from "react";
import "../styles/leaveRequest.css";
import notify from "../assets/icons/notify.svg";
import userimg from "../assets/icons/user-img.png";
import dropdown from "../assets/icons/dropdown.svg";

const LeaveRequest = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    {
      name: "MAGHESH",
      email: "magesh@Dotcod.in",
      requestDate: "6/3/22",
      leaveType: "Casual Leave",
      reason: "Not Well....",
      noDays: "01",
      status: "Pending",
    },
    {
      name: "Tesla",
      email: "Rsahull@Dotcod.in",
      requestDate: "12/2/22 - 16/02/22",
      leaveType: "Sick Leave",
      reason: "Not Well....",
      noDays: "04",
      status: "Approved",
    },
    // Add more leave requests as needed
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updatedRequests = [...leaveRequests];
    updatedRequests[index].status = newStatus;
    setLeaveRequests(updatedRequests);
  };

  return (
    <div className="leave-request-container">
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

      <div className="content-wrapper">
        <div className="stats-grid">
          <div className="stat-card casual">
            <div className="stat-content">
              <div className="stat-title">Casual Leave</div>
              <div className="stat-value">04</div>
            </div>
            <div className="stat-footer">+2% Jan month</div>
          </div>

          <div className="stat-card emergency">
            <div className="stat-content">
              <div className="stat-title">Emergency Leave</div>
              <div className="stat-value">06</div>
            </div>
            <div className="stat-footer">+2% Jan month</div>
          </div>

          <div className="stat-card total">
            <div className="stat-content">
              <div className="stat-title">Total Leave Jan</div>
              <div className="stat-value">10</div>
            </div>
            <div className="stat-footer">+2% Jan month</div>
          </div>

          <div className="stat-card today">
            <div className="stat-content">
              <div className="stat-title">Today Leave</div>
              <div className="stat-value">02</div>
            </div>
            <div className="stat-footer">23/01 Monday</div>
          </div>
        </div>

        <div className="leave-table">
          <div className="table-header">
            <div className="header-left">
              <div className="title">Leave Request</div>
              <div className="count">{leaveRequests.length}</div>
            </div>
            <div className="search-box">
              <i className="ti ti-search" />
              <input type="text" placeholder="Type here..." />
            </div>
          </div>

          <div className="table-divider" />

          <div className="table-content">
            <table>
              <thead>
                <tr>
                  <th>
                    <span>Name</span>
                    <i className="ti ti-arrows-sort" />
                  </th>
                  <th>
                    <span>Request Date</span>
                    <i className="ti ti-arrows-sort" />
                  </th>
                  <th>
                    <span>Leave type</span>
                    <i className="ti ti-arrows-sort" />
                  </th>
                  <th>Reason</th>
                  <th>No Days</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((request, index) => (
                  <tr key={index}>
                    <td>
                      <div className="name-cell">
                        <span>{request.name}</span>
                        <div className="email">{request.email}</div>
                      </div>
                    </td>
                    <td>{request.requestDate}</td>
                    <td>{request.leaveType}</td>
                    <td>{request.reason}</td>
                    <td>{request.noDays}</td>
                    <td>
                      <select
                        value={request.status}
                        onChange={(e) =>
                          handleStatusChange(index, e.target.value)
                        }
                        className={`status-${request.status.toLowerCase()}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                    <td>
                      <div className="actions">
                        <i className="ti ti-dots-vertical" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;
