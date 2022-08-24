import React from "react";
import Sidebar from "../sidebar";
import { Link } from "react-router-dom";

import "./Style.css";
export default function Login() {
  return (
    <div className="main">
      <div className="data-div">
        <div>
          <h1>Login</h1>
          {/* <br></br> */}
          <label>Name</label>
          <br></br>
          <input type="text" />
          <br></br>
          <br></br>
          <label>Password</label>
          <br></br>
          <input type="Pass" />
          <br></br>
          <button>Login</button>
          <br></br>
        </div>
      </div>
    </div>
  );
}
