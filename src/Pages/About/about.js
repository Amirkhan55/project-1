import React from "react";
import "./style.css";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="data">
        <p>About pages</p>
      </div>
    </div>
  );
}
