import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";

export default function Home() {
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="data">
        <p>Home pages</p>
      </div>
    </div>
  );
}
