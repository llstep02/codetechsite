/* ================== START: Imports ================== */
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import React from "react";
import { AppRoutes } from "./routes"
/* ================== END: Imports ================== */

/* ================== START: Render App ================== */
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
/* ================== END: Render App ================== */

/* ================== START: Performance Measuring ================== */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* ================== END: Performance Measuring ================== */
