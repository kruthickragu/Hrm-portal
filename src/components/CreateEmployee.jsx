import React, { useState, useEffect } from "react";
import "../styles/createEmployee.css";

const CreateEmployee = ({ onSave, onCancel }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(true);
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    name: "",
    email: "",
    employeeNumber: "",
    mobileNumber: "",
    joinDate: "",
    status: "",
    dob: "",
    physicalChallenged: "",
    gender: "",
    bloodGroup: "",
    maritalStatus: "",
    personalEmail: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    // Format the data to match the employee list structure
    const formattedData = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID
      name: employeeData.name,
      email: employeeData.email,
      joinDate: employeeData.joinDate,
      designation: employeeData.department || "Not Specified",
      status: employeeData.status || "Probation",
    };

    setShowSuccess(true);

    // Hide success message after 2 seconds and save
    setTimeout(() => {
      setShowSuccess(false);
      onSave(formattedData);
    }, 2000);
  };

  // Clear success message when component unmounts
  useEffect(() => {
    return () => setShowSuccess(false);
  }, []);

  return (
    <div className="create-employee-container">
      {showSuccess && <div className="success-message">Employee added successfully!</div>}

      {/* Employee Details Section */}
      <div className="section">
        <div className="section-header" onClick={() => setShowEmployeeDetails(!showEmployeeDetails)}>
          <h2>Add details of Employee</h2>
          <span>{showEmployeeDetails ? "−" : "+"}</span>
        </div>
        {showEmployeeDetails && (
          <div className="section-content">
            <div className="form-row">
              <div className="form-group sty">
                <label>Employee Name *</label>
                <input type="text" name="name" value={employeeData.name} onChange={handleChange} placeholder="Enter Employee Name" />
              </div>
              <div className="form-group sty">
                <label>Employee Number *</label>
                <input type="text" name="employeeNumber" value={employeeData.employeeNumber} onChange={handleChange} placeholder="Enter Employee Number" />
              </div>
              <div className="form-group sty">
                <label>Date of Joining *</label>
                <input type="date" name="joinDate" value={employeeData.joinDate} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group sty">
                <label>Email Id *</label>
                <input type="email" name="email" value={employeeData.email} onChange={handleChange} placeholder="Enter Email Id" />
              </div>
              <div className="form-group sty">
                <label>Mobile Number *</label>
                <input type="text" name="mobileNumber" value={employeeData.mobileNumber} onChange={handleChange} placeholder="Enter Mobile Number" />
              </div>
              <div className="form-group sty">
                <label>Employee Status *</label>
                <select name="status" value={employeeData.status} onChange={handleChange}>
                  <option value="">Select Status</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Probation">Probation</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Personal Details Section */}
      <div className="section">
        <div className="section-header" onClick={() => setShowPersonalDetails(!showPersonalDetails)}>
          <h2>Personal Details</h2>
          <span>{showPersonalDetails ? "−" : "+"}</span>
        </div>
        {showPersonalDetails && (
          <div className="section-content">
            <div className="form-row">
              <div className="form-group sty">
                <label>Date Of Birth *</label>
                <input type="date" name="dob" value={employeeData.dob} onChange={handleChange} />
              </div>
              <div className="form-group sty">
                <label>Is Physically Challenged *</label>
                <select name="physicalChallenged" value={employeeData.physicalChallenged} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="form-group sty">
                <label>Gender *</label>
                <select name="gender" value={employeeData.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group sty">
                <label>Blood Group *</label>
                <select name="bloodGroup" value={employeeData.bloodGroup} onChange={handleChange}>
                  <option value="">Select Blood Group</option>
                  <option value="O+">O+</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O-">O-</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              <div className="form-group sty">
                <label>Marital Status *</label>
                <select name="maritalStatus" value={employeeData.maritalStatus} onChange={handleChange}>
                  <option value="">Select Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              <div className="form-group sty">
                <label>Personal Email Id *</label>
                <input type="email" name="personalEmail" value={employeeData.personalEmail} onChange={handleChange} placeholder="Enter Email Id" />
              </div>
            </div>

            <div className="form-group sty">
              <label>Department</label>
              <input type="text" name="department" value={employeeData.department} onChange={handleChange} placeholder="Enter Department" />
            </div>
          </div>
        )}
      </div>

      {/* Form Actions */}
      <div className="form-actions">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default CreateEmployee;