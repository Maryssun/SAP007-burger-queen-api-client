import React from "react";
import ReactDOM from "react-dom/client";
import "./global.style.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Router } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
