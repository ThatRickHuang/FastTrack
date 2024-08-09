import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const handleLogout = () => {
    axios
      .get("http://localhost:8081/logout")
      .then((res) => {
        if (res.data.Message === "Success") {
          location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };
  const navigate = useNavigate();
  function trackNav() {
    return navigate("/tracker");
  }

  function homeNav() {
    return navigate("/home");
  }
  function profileNav() {
    return navigate("/profile");
  }
  return (
    <div className="flex justify-between mt-4">
      <div className="flex gap-[50px] ml-[100px]">
        <div>
          <button onClick={homeNav}>Home</button>
        </div>
        <div>
          <button type="button" onClick={trackNav}>
            Tracker
          </button>
        </div>
        <div>
          <button type="button" onClick={profileNav}>
            Profile
          </button>
        </div>
      </div>
      <div className="mr-[100px]">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
