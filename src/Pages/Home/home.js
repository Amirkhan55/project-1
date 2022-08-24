import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar";
import Axios from "../../axios/axios";

export default function Home() {
  return (
    <div className="main">
      {/* <Sidebar /> */}
      <Axios />
    </div>
  );
}
