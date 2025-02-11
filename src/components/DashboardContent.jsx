import React, { useState } from "react";
import "../styles/dashboard.css";
import {Calendar} from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dasgra from "../assets/icons/dasgra.svg";
import dasgra2 from "../assets/icons/dasgra2.svg";
import dt from "../assets/icons/dt.svg";
import bdy from "../assets/icons/bdy.png";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [selectedBirthdays, setSelectedBirthdays] = useState([]);

  // List of birthdays
  const birthdays = [
    { name: "Robert Whistable", date: "2025-02-15", role: "Product Manager" },
    { name: "Alice Johnson", date: "2025-02-20", role: "Software Engineer" },
  ];

  // Handle date selection
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);

    const formattedDate = selectedDate.toISOString().split("T")[0];
    const matchingBirthdays = birthdays.filter((b) => b.date === formattedDate);

    setSelectedBirthdays(matchingBirthdays);
  };

  // Highlight birthday dates on the calendar
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toISOString().split("T")[0];
      const birthday = birthdays.find((b) => b.date === dateString);
      return birthday ? <div style={{ color: "red", fontWeight: "bold" }}>🎉</div> : null;
    }
  };
 

  return (
    <div className="dashboard-desktop">
      <div className="rectangle-2" />
      <div className="overlap">
        <div className="background">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="title">
              <div className="text-wrapper-49">Dashboard</div>
            </div>

            <div className="available-position">
              <div className="available-position-2">Leave Request</div>
              <div className="text-wrapper-50">04</div>
            </div>

            <div className="job-open">
              <div className="available-position-2">Attendance</div>
              <div className="text-wrapper-50">10</div>
            </div>

            <div className="new-employees">
              <div className="available-position-2">Total Employees</div>
              <div className="text-wrapper-50">24</div>
            </div>

            <div className="talent-request">
              <div className="frame">
                <div className="frame-2">
                  <div className="total-employees">PayRoll</div>
                  <div className="element">48</div>
                </div>
                <div className="frame-3">
                  <div className="element-men">12 Men</div>
                  <div className="element-women">12 Women</div>
                </div>
              </div>
              <div className="frame-4">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <img
                      loading="lazy"
                      src={dasgra}
                      alt="dasgra"
                      className="vector"
                    />
                  </div>
                </div>
                <div className="frame-6">
                  <div className="text-wrapper-52">+2% Past month</div>
                </div>
              </div>
            </div>

            <div className="totala-employees">
              <div className="frame">
                <div className="frame-2">
                  <div className="total-employees">Task Request</div>
                  <div className="element">16</div>
                </div>
                <div className="frame-3">
                  <div className="element-men">6 Men</div>
                  <div className="element-women">10 Women</div>
                </div>
              </div>
              <div className="frame-4">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <img
                      loading="lazy"
                      src={dasgra2}
                      alt="dasgra2"
                      className="vector"
                    />
                  </div>
                </div>
                <div className="frame-6">
                  <div className="text-wrapper-52">+5% Past month</div>
                </div>
              </div>
            </div>

            <div className="announcement">
              <div className="frame-13">
                <div className="text-wrapper-56">Announcement</div>
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="text-wrapper-57">Today, 13 Sep 2021</div>
                  </div>
                </div>
              </div>

              <div className="frame-7">
                <div className="frame-8">
                  <div className="text-wrapper-53">
                    Outing schedule for every departement
                  </div>
                  <div className="text-wrapper-54">5 Minutes ago</div>
                </div>
                <div className="frame-9">
                  <img
                    loading="lazy"
                    src={dt}
                    alt=""
                    className="img-2"
                  />
                </div>
              </div>

              <div className="frame-10">
                <div className="frame-8">
                  <div className="text-wrapper-53">Meeting HR Department</div>
                  <div className="text-wrapper-54">Yesterday, 12:30 PM</div>
                </div>
                <div className="frame-9">
                  <img
                    loading="lazy"
                    src={dt}
                    alt=""
                    className="img-2"
                  />
                </div>
              </div>

              <div className="frame-11">
                <div className="frame-8">
                  <div className="text-wrapper-53">
                    IT Department need two more talents for UX/UI Designer
                    position
                  </div>
                  <div className="text-wrapper-54">Yesterday, 09:15 AM</div>
                </div>
                <div className="frame-9">
                  <img
                    loading="lazy"
                    src={dt}
                    alt=""
                    className="img-2"
                  />
                </div>
              </div>

              <div className="frame-12">
                <div className="text-wrapper-55">See All Announcement</div>
              </div>
            </div>

    <div className="birthday-calendar-container ">
      <div className="calendar-container group">
        <Calendar onChange={handleDateChange} value={date} tileContent={tileContent} />
      </div>
      <h2 className="text-wrapper-58">Birthday Calendar</h2>

      <div className="listing-cards">
        {selectedBirthdays.length > 0 ? (
          selectedBirthdays.map((bday, index) => (
            <div key={index} className="birthday-card">
              
              <img
                loading="lazy"
                src={bdy}
                alt="bdy"
                className="unsplash"
              />
              <div className="text-wrapper-46">{bday.name}</div>
              <div className="text-wrapper-47">{bday.role}</div>
              <div className="text-wrapper-48">{bday.date}</div>
            </div>
          ))
        ) : (
          <div className="no-birthdays-message">No birthdays on this day 🎂</div>
        )}
      </div>
    </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
