import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "../reportWebVitals"; 

const RootApp = () => {
  return (
    <div>
      <App />
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
