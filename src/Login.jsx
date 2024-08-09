// src/components/Login.js
import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data.status === "success") {
          navigate("/home"); // Redirect to the home page
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex justify-center  h-screen items-center bg-blue-400">
      <div className="p-3 bg-white w-25">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-5">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="Enter email"
              type="email"
              className="ml-9 "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3 mt-5">
            <label htmlFor="password">Password:</label>
            <input
              placeholder="Enter Password"
              type="password"
              id="password"
              className="ml-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-500 rounded-lg w-[75px] hover:bg-green-400 mt-5 "
          >
            Login
          </button>
          <div>
            <h4>register</h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
