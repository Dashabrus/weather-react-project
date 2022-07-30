import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />
    <div>
      <a
        href="https://github.com/Dashabrus/Weather-project"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Open-source code
      </a>
      by Dasha Brus
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
