import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import RegisterScreen from "./RegisterScreen";

function SigninScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [goToRegister, setgoToRegister] = useState(false);
  const signIn = (e) => {
    e.preventDefault();
    //
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        alert("success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  };
  const register = (e) => {
    e.preventDefault();
    setgoToRegister(!goToRegister);
  };
  return (
    <div>
      {goToRegister ? (
        <RegisterScreen />
      ) : (
        <div className=" relative flex flex-col justify-center items-center w-screen">
          <div className="nav-login flex justify-between items-center px-3 fixed top-0 w-screen">
            <img
              src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
              alt=""
              className="  w-48 h-20"
            />
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
          <div className="text-white flex flex-col justify-center items-start absolute top-44 ml-auto mr-auto w-fit p-16 space-y-9 bg-black rounded-md">
            <h1 className=" font-bold text-4xl text-center">SIGN IN</h1>
            <div className="flex flex-col space-y-3 ">
              <input
                className=" text-gray-400 pl-2 pr-9 w-96 h-10 rounded-sm"
                type="email"
                placeholder="Email Address"
                ref={emailRef}
              />
              <input
                className=" text-gray-400  pl-2 pr-9 w-96 h-10 rounded-sm"
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
              <button
                className=" bg-red-600 px-3 h-10 rounded-sm"
                onClick={signIn}
              >
                Sign in
              </button>
            </div>
            <div className="flex space-x-3">
              <p className=" text-gray-400">New to Netflix ? </p>
              <a href="/" onClick={register}>
                Sign up now.
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SigninScreen;
