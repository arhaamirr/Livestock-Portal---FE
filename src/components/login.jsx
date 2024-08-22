import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const container = document.getElementById('container-login');
    if (container) {
      container.classList.toggle('sign-in', signIn);
      container.classList.toggle('sign-up', signUp);
    }
  }, [signIn, signUp]);

  useEffect(() => {
    setSignUp(true);
    setSignIn(false);
  }, []);

  const toggle = () => {
    setSignUp(!signUp);
    setSignIn(!signIn);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`/api/users/login`, {
        email,
        password,
      });
      if (response.status == 200) {
        alert("Login successful");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        navigate("/dashboard");
      } else {
        setErrorMessage(response.data.message || "Login failed");
      }
    } catch (error) {
      alert("Could not log in. Contact support");
    }
  };
  
  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <section className="">
      <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
        <div className="container">
          <div className="row gx-lg-5 align-items-center d-flex justify-content-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" for="email">Email address</label>
                      <input type="email" id="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" for="password">Password</label>
                      <input type="password" id="password" className="form-control" value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary  mb-5 col-12 text-light">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    // <div
    //   className="login-container-login"
    //   style={{
    //     height: "600px",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <div className="login-form-container-login" style={{ width: "300px" }}>
    //     <h2 className="login-title">Login</h2>
    //     <form onSubmit={handleSubmit} className="login-form">
    //       <div className="form-group">
    //         <label htmlFor="email" className="login-label">
    //           Email:
    //         </label>
    //         <input
    //           type="email"
    //           className="form-control"
    //           id="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           required
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label htmlFor="password" className="login-label">
    //           Password:
    //         </label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           id="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           required
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="btn btn-primary"
    //         style={{
    //           backgroundColor: "green",
    //           marginTop: "25px",
    //           marginLeft: "120px",
    //         }}
    //       >
    //         Login
    //       </button>
    //     </form>
    //   </div>
    //   <div>
    //     <div
    //       style={{
    //         width: "2px",
    //         height: "300px",
    //         backgroundColor: "green",
    //         margin: "0 20px",
    //       }}
    //     ></div>
    //   </div>
    //   <button
    //     type="button"
    //     className="btn btn-primary"
    //     style={{
    //       backgroundColor: "green",
    //       marginTop: "25px",
    //       marginLeft: "120px",
    //     }}
    //     onClick={handleSignupClick}
    //   >
    //     Signup
    //   </button>
    // </div>
  );
};

export default LoginPage;
