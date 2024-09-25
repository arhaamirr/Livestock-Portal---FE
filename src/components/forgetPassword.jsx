import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import TopbarComponent from "./topbar";
import NavbarComponent from "./navbar";
import Footer from "./footer";
import { toast } from "react-toastify";
import { updatePassword } from "../api/profile";

const ForgetPassword = () => {
  const {email} = useParams();
  const [password, setPassword] = useState("");
  const [selectedRole, setRole] = useState("admin");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);

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

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log(password, confirmPassword, email, selectedRole);
        if(password != confirmPassword || !password || !confirmPassword) {
            toast.error("Passwords do not match, please re-enter");
        }
        else {
        const response = await updatePassword({
                email,
                password,
                confirmPassword,
                selectedRole
            });
            if (response.updated == 1) {
               toast.success(response.message);
            } else {
                toast.error(`${response.message || "Error updating password"}`)
            }
        }
    } catch (error) {
        toast.error("Error updating password")
    }
  };

  return (
    <section className="container-fluid px-0 mb-5">
      <TopbarComponent />
      <NavbarComponent />
      <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
        <div className="container">
          <div className="row gx-lg-5 align-items-center d-flex justify-content-center">
            <div className="col-lg-5 col-md-8 col-9 col-sm-9  mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    <div data-mdb-input-init className="form-outline mb-4 ">
                    <label className="form-label" htmlFor="role">Select Role</label>
                    <select value={selectedRole} onChange={handleRole} className="form-control">
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="doctor">Doctor</option>
                    </select>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">Password</label>
                      <input type="password" id="password" className="form-control" value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="password">Confirm Password</label>
                      <input type="password" id="confirmPassword" className="form-control" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary mt-3 col-12 text-dark">
                      Change Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ForgetPassword;
