import { useState } from "react";
import axios from "axios";
import "../css/signUp.css";
import TopbarComponent from "./topbar";
import NavbarComponent from "./navbar";
import Footer from "./footer";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/users/register", {
        name,
        email,
        password,
        phone,
      });

      if (response.status == 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success("Sign up successful");
        window.location.href = '/';
      } else {
        toast.warn(`${response.data.message || "Sign up failed"}`)
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Failed to sign up. Please try again.");

    }
  };

  return (
    <section className="container-fluid px-0 mb-5">
      <TopbarComponent />
      <NavbarComponent />
      <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 d-block d-sm-block">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                The best offer <br />
                <span className="text-primary">for your business</span>
              </h1>
              <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="name">Username</label>
                      <input type="text" id="name" className="form-control" value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">Email address</label>
                      <input type="email" id="email" className="form-control" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="email">Phone Number</label>
                      <input type="text" className="form-control" id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">Password</label>
                      <input type="password" className="form-control" id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                      <label className="form-check-labsel" htmlFor="form2Example33">
                        Subscribe to our newsletter
                      </label>
                    </div>
                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary  mb-5 col-12 text-light">
                      Sign up
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

export default SignUpPage;
