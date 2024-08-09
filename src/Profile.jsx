import React from "react";
import NavBar from "./NavBar";
import profilePic from "./assets/profilePic.jpg";
import { useState } from "react";

const Profile = () => {
  const [pfp, setPfp] = useState(profilePic);
  function handleChange(e) {
    const objectURL = URL.createObjectURL(e.target.files[0]);
    setPfp(objectURL);
  }

  return (
    <>
      <NavBar />
      <div>
        <div className="flex-col justify-center">
          <img
            className=" rounded-full object-cover h-[500px] w-[500px]"
            src={pfp}
            alt=""
          />
          <input type="file" onChange={handleChange} />
        </div>
      </div>
    </>
  );
};

export default Profile;
