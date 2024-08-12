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
       //   <div id="container" className="container">
      //   <div className="row">
      //     <div className="col align-items-center flex-col sign-up">
      //       <div className="form-wrapper align-items-center">
      //         <div className="form sign-up">
      //           <div className="input-group">
      //             <i className='bx bxs-user'></i>
      //             <input type="text" placeholder="Username" />
      //           </div>
      //           <div className="input-group">
      //             <i className='bx bx-mail-send'></i>
      //             <input type="email" placeholder="Email" />
      //           </div>
      //           <div className="input-group">
      //             <i className='bx bxs-lock-alt'></i>
      //             <input type="password" placeholder="Password" />
      //           </div>
      //           <div className="input-group">
      //             <i className='bx bxs-lock-alt'></i>
      //             <input type="password" placeholder="Confirm password" />
      //           </div>
      //           <button>
      //             Sign up
      //           </button>
      //           <p>
      //             <span>
      //               Already have an account?
      //             </span>
      //             <b onclick="toggle()" className="pointer">
      //               Sign in here
      //             </b>
      //           </p>
      //         </div>
      //       </div>
          
      //     </div>
      //     <div className="col align-items-center flex-col sign-in">
      //       <div className="form-wrapper align-items-center">
      //         <div className="form sign-in">
      //           <div className="input-group">
      //             <i className='bx bxs-user'></i>
      //             <input type="text" placeholder="Username" />
      //           </div>
      //           <div className="input-group">
      //             <i className='bx bxs-lock-alt'></i>
      //             <input type="password" placeholder="Password" />
      //           </div>
      //           <button>
      //             Sign in
      //           </button>
      //           <p>
      //             <b>
      //               Forgot password?
      //             </b>
      //           </p>
      //           <p>
      //             <span>
      //               Don't have an account?
      //             </span>
      //             <b onclick="toggle()" className="pointer">
      //               Sign up here
      //             </b>
      //           </p>
      //         </div>
      //       </div>
      //       <div className="form-wrapper">
        
      //       </div>
      //     </div>
      //   </div>
      //   <div className="row content-row">
      //     <div className="col align-items-center flex-col">
      //       <div className="text sign-in">
      //         <h2>
      //           Welcome
      //         </h2>
      
      //       </div>
      //       <div className="img sign-in">
        
      //       </div>
      //     </div>
      //     <div className="col align-items-center flex-col">
      //       <div className="img sign-up">
            
      //       </div>
      //       <div className="text sign-up">
      //         <h2>
      //           Join with us
      //         </h2>
      
      //       </div>
      //     </div>
      //   </div>
      // </div>

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
