import React, { useState, useMemo } from "react";
import CreateEmployee from "./CreateEmployee";
import "../styles/employeeList.css";

const EmployeeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [statusFilter, setStatusFilter] = useState(null);
  const [dateFilter, setDateFilter] = useState(null);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showCreateEmployee, setShowCreateEmployee] = useState(false);

  // Initialize employees state with default data
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "MAGHESH",
      email: "magesh@Dotcod.in",
      joinDate: "Joined date",
      designation: "Software Engineer",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Tesla",
      email: "Rsahull@Dotcod.in",
      joinDate: "4/19/23",
      designation: "Software Engineer",
      status: "Probation",
    },
    {
      id: 3,
      name: "GM",
      email: "gm@Dotcod.in",
      joinDate: "1/2/23",
      designation: "Software Engineer",
      status: "Confirmed",
    },
    {
      id: 4,
      name: "AARP",
      email: "aarp@Dotcod.in",
      joinDate: "9/4/23",
      designation: "Software Engineer",
      status: "Probation",
    },
    {
      id: 5,
      name: "Disney",
      email: "@Dotcod.in",
      joinDate: "6/3/22",
      designation: "Software Engineer",
      status: "Confirmed",
    },
    {
      id: 6,
      name: "Prime Theraputics",
      email: "@Dotcod.in",
      joinDate: "12/2/22",
      designation: "Software Engineer",
      status: "Probation",
    },
    {
      id: 7,
      name: "Match.com",
      email: "CODE@Dotcod.in",
      joinDate: "4/19/23",
      designation: "Software Engineer",
      status: "Confirmed",
    },
    {
      id: 8,
      name: "Chevy",
      email: "@Dotcod.in",
      joinDate: "4/19/23",
      designation: "Software Engineer",
      status: "Probation",
    },
  ]);

  const handleSort = (key) => {
    if (key !== "status") {
      let direction = "asc";
      if (sortConfig.key === key && sortConfig.direction === "asc") {
        direction = "desc";
      }
      setSortConfig({ key, direction });
    }
  };

  const getSortIcon = (key) => {
    if (key === "status") {
      return null;
    }
    if (sortConfig.key === key) {
      return (
        <i
          className={`ti ti-chevron-down sort-icon ${
            sortConfig.direction === "asc" ? "asc" : ""
          }`}
        ></i>
      );
    }
    return <i className="ti ti-chevron-down sort-icon"></i>;
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setShowStatusDropdown(false);
  };

  const filteredAndSortedEmployees = useMemo(() => {
    let result = [...employees];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (employee) =>
          employee.name.toLowerCase().includes(query) ||
          employee.email.toLowerCase().includes(query) ||
          employee.designation.toLowerCase().includes(query)
      );
    }

    // Apply status filter
    if (statusFilter) {
      result = result.filter((employee) => employee.status === statusFilter);
    }

    // Apply date filter
    if (dateFilter) {
      result = result.filter((employee) =>
        employee.joinDate.includes(dateFilter)
      );
    }

    // Apply sorting
    if (sortConfig.key && sortConfig.key !== "status") {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [employees, searchQuery, sortConfig, statusFilter, dateFilter]);

  const clearFilters = () => {
    setStatusFilter(null);
    setDateFilter(null);
  };

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".column-dropdown")) {
        setShowStatusDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setShowCreateEmployee(false);
  };

  return showCreateEmployee ? (
    <CreateEmployee
      onSave={handleAddEmployee}
      onCancel={() => setShowCreateEmployee(false)}
    />
  ) : (
    <div className="employee-list-container">
      <div className="header-section">
        <div className="title-count">
          <span className="employee-text">employee</span>
          <span className="employee-count">{employees.length}</span>
        </div>
        <div className="action-buttons">
          <button className="import-btn">
            <i className="ti ti-upload"></i>
            Import Excel
          </button>
          <button
            className="add-btn"
            onClick={() => setShowCreateEmployee(true)}
          >
            <i className="ti ti-plus"></i>
            Add Employee
          </button>
        </div>
      </div>

      <div className="employee-table-container">
        <div className="table-header">
          <div className="title-count">
            <span className="employee-text">employee</span>
            <span className="employee-count">{employees.length}</span>
          </div>
          <div className="search-input">
            <i className="ti ti-search"></i>
            <input
              type="text"
              placeholder="Type here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-section">
          <div className="dropdown">
            <button
              className="filter-button"
              onClick={() => setShowDateDropdown(!showDateDropdown)}
            >
              <i className="ti ti-calendar"></i>
              Join Date
            </button>
            {showDateDropdown && (
              <div className="dropdown-content">
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setDateFilter("2023");
                    setShowDateDropdown(false);
                  }}
                >
                  2023
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    setDateFilter("2022");
                    setShowDateDropdown(false);
                  }}
                >
                  2022
                </div>
              </div>
            )}
          </div>

          {(statusFilter || dateFilter) && (
            <button className="filter-button" onClick={clearFilters}>
              <i className="ti ti-x"></i>
              Clear Filters
            </button>
          )}
        </div>

        {(statusFilter || dateFilter) && (
          <div className="active-filters">
            {statusFilter && (
              <div className="filter-tag">
                Status: {statusFilter}
                <i
                  className="ti ti-x"
                  onClick={() => setStatusFilter(null)}
                ></i>
              </div>
            )}
            {dateFilter && (
              <div className="filter-tag">
                Year: {dateFilter}
                <i className="ti ti-x" onClick={() => setDateFilter(null)}></i>
              </div>
            )}
          </div>
        )}

        <div className="table-content">
          <table className="employee-table">
            <thead>
              <tr>
                <th></th>
                <th onClick={() => handleSort("name")}>
                  <div className="sort-header">
                    Name
                    {getSortIcon("name")}
                  </div>
                </th>
                <th onClick={() => handleSort("joinDate")}>
                  <div className="sort-header">
                    Join Date
                    {getSortIcon("joinDate")}
                  </div>
                </th>
                <th onClick={() => handleSort("designation")}>
                  <div className="sort-header">
                    Designation
                    {getSortIcon("designation")}
                  </div>
                </th>
                <th className="status-column">
                  <div
                    className="column-dropdown"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowStatusDropdown(!showStatusDropdown);
                    }}
                  >
                    <span className="status-header">Status</span>
                    <i className="ti ti-chevron-down"></i>
                    {showStatusDropdown && (
                      <div className="column-dropdown-content">
                        <div
                          className={`column-dropdown-item ${
                            !statusFilter ? "selected" : ""
                          }`}
                          onClick={() => handleStatusFilter(null)}
                        >
                          <span>All</span>
                          <i className="ti ti-check"></i>
                        </div>
                        <div
                          className={`column-dropdown-item ${
                            statusFilter === "Confirmed" ? "selected" : ""
                          }`}
                          onClick={() => handleStatusFilter("Confirmed")}
                        >
                          <span>Confirmed</span>
                          <i className="ti ti-check"></i>
                        </div>
                        <div
                          className={`column-dropdown-item ${
                            statusFilter === "Probation" ? "selected" : ""
                          }`}
                          onClick={() => handleStatusFilter("Probation")}
                        >
                          <span>Probation</span>
                          <i className="ti ti-check"></i>
                        </div>
                      </div>
                    )}
                  </div>
                </th>
                <th>
                  <div className="sort-header">
                    Options
                    <i className="ti ti-dots-vertical"></i>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedEmployees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    <div className="checkbox-wrapper">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div className="employee-name">
                      {employee.name}
                      <div className="employee-email">{employee.email}</div>
                    </div>
                  </td>
                  <td>{employee.joinDate}</td>
                  <td>{employee.designation}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        employee.status === "Confirmed"
                          ? "status-confirmed"
                          : "status-probation"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td>
                    <i className="ti ti-dots-vertical table-icon"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
