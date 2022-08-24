import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export default function Axios() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        <div className="card">
          <h3>{res.username} </h3>
          <span>{res.city}</span>
        </div>;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div></div>;
}
