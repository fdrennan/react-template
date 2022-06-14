import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./routes/Navbar/Navbar";
import App from "./routes/App/App";
import Settings from "./routes/Settings/Settings";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  </BrowserRouter>
);
