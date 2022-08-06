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
reportWebVitals();
