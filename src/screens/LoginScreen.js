import React, { useState } from "react";

import SigninScreen from "./SigninScreen";

function LoginScreen() {
  const [goToSignin, setgoToSignin] = useState(false);
  return (
    <div>
      {goToSignin ? (
        <SigninScreen />
      ) : (
        <div className=" relative flex flex-col justify-center items-center w-screen">
          <div className="nav-login flex justify-between items-center px-3 fixed top-0 w-screen">
            <img
              src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
              alt=""
              className="  w-48 h-20"
            />
            <button
              className=" text-white h-fit py-2 px-5 border-none bg-red-600"
              onClick={() => {
                setgoToSignin(!goToSignin);
              }}
            >
              {" "}
              Sign in{" "}
            </button>
          </div>
          <div
            className="bg-img h-screen bg-gradient-to-tr from-gray-700 via-gray-900 to-black w-screen
       "
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg)`,
              backgroundPosition: "center center ",
              backgroundBlendMode: "darken",
            }}
          ></div>
          <div className="text-white flex flex-col justify-center items-center absolute top-64 ml-auto mr-auto p-10 w-screen space-y-3">
            <h1 className=" font-bold text-5xl text-center">
              Unlimited films TV programmes and more.
            </h1>
            <p className=" text-gray-300">Watch anywhere and cancel anytime</p>
            <p className=" text-gray-300">
              Wead to watch, enter your email to create or restart your
              membership
            </p>
            <div>
              <input
                className=" pl-2 pr-9 w-96 text-black"
                type="email"
                placeholder="Email Address"
              />
              <button
                className=" bg-red-600 px-3 "
                onClick={() => {
                  setgoToSignin(!goToSignin);
                }}
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginScreen;
