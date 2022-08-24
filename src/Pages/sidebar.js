import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/Login"> 
        <h3>Login</h3>
      </Link>
      <Link to="About">
        <h3>About</h3>
      </Link>
    </div>
  );
}
