import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./../styles/login.css";
import logo from "../assets/icons/hrm-logo.png";
import companyid from "../assets/icons/briefcase.svg";
import passicon from "../assets/icons/lock.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-section">
          <img src={logo} alt="Company logo" className="logo" />
          <span className="logo-text">Your Logo</span>
        </div>
        <h1 className="sign-in-title">Sign Into</h1>
        <h2 className="your-account">Your Account</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-wrapper">
              <img
                src={companyid}
                alt="Company ID icon"
                className="input-icon"
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Company ID"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-wrapper">
              <img src={passicon} alt="Password icon" className="input-icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div className="form-group remember-me">
            <label>
              <input type="checkbox" name="rememberMe" /> Remember Me
            </label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </div>
      <div className="side-image"></div>
    </div>
  );
};

export default Login;
