import React from "react";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="data">
        <p>Login pages</p>
      </div>
    </div>
  );
}
