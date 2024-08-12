import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "../reportWebVitals"; 
import NavbarComponent from "./components/navbar";
import TopbarComponent from "./components/topbar";
import Footer from "./components/footer";
import Copyright from "./components/copyright";

const RootApp = () => {
  return (
    <div>
      <TopbarComponent />
      <NavbarComponent />
      <App />
      <Footer />
      <Copyright />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
