import React from "react";
import ReactDOM from "react-dom/client";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather defaultCity="Dnipro" />
    <div>
      <a
        href="https://github.com/Dashabrus/Weather-project"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Open-source code
      </a>
      by{" "}
      <a
        href="https://heroic-sfogliatella-9cf955.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="portfolioLink"
      >
        Dasha Brus
      </a>
    </div>
  </React.StrictMode>
);
reportWebVitals();
