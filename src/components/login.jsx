import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });
      if (response.status == 200) {
        alert("Login successful");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        window.location.href = '/';
      } else {
        setErrorMessage(response.data.message || "Login failed");
      }
    } catch (error) {
      alert("Could not log in. Contact support");
    }
  };
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div
      className="login-container"
      style={{
        height: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="login-form-container" style={{ width: "300px" }}>
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="login-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="login-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              backgroundColor: "green",
              marginTop: "25px",
              marginLeft: "120px",
            }}
          >
            Login
          </button>
        </form>
      </div>
      <div>
        <div
          style={{
            width: "2px",
            height: "300px",
            backgroundColor: "green",
            margin: "0 20px",
          }}
        ></div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        style={{
          backgroundColor: "green",
          marginTop: "25px",
          marginLeft: "120px",
        }}
        onClick={handleSignupClick}
      >
        Signup
      </button>
    </div>
  );
};

export default LoginPage;
