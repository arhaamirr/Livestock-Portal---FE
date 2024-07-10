import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "../reportWebVitals"; 
import NavbarComponent from "./components/navbar";
import Footer from "./components/footer";

const RootApp = () => {
  return (
    <div>
      <NavbarComponent />
      <App />
      <Footer />
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
