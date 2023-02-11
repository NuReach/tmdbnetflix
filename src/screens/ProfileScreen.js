import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { auth } from "../firebase";

function ProfileScreen() {
  const navigate = useNavigate;
  const user = useSelector((state) => state.user.user);
  return (
    <div className="text-white flex flex-col items-center">
      <Nav />
      <div className="info absolute top-48  flex flex-col justify-center items-center ">
        <div className="header w-full">
          <h1 className="text-3xl font-bold">Edit profile</h1>
        </div>
        <div className="body flex space-x-6 space-y-3">
          <div className="left pt-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
              className=" w-28 h-28"
              onClick={() => {
                navigate("/profile");
              }}
            />
          </div>
          <div className="right space-y-3">
            <p className="bg-gray-600 p-3 rounded-sm">{user.email}</p>
            <p className="text-gray-300">Plans ( current plan : premium)</p>
            <p>Renewal date : 04/03/2021</p>
            <div className="plan-row flex space-x-64 justify-center items-center">
              <div className="-space-y-2">
                <p>Netflix Standard</p>
                <p>1080</p>
              </div>
              <button className="bg-red-600 px-3 h-9 rounded-sm">
                Subscribe
              </button>
            </div>
            <button
              className="w-full bg-red-600 py-1 rounded-sm"
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
