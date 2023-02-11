import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-between pl-3 pr-3 items-center fixed w-full z-10">
      <img
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
        alt=""
        className="  w-48 h-20"
        onClick={() => {
          navigate("/");
        }}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        className=" w-12 h-12"
        onClick={() => {
          navigate("/profile");
        }}
      />
    </div>
  );
}

export default Nav;
