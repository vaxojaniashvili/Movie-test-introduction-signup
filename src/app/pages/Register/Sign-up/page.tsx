"use client"
import SignUpInput from "@/app/components/Sign-up-input/SignUpInput";
import Link from "next/link";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passErrorMessage, setPassErrorMessage] = useState("");
  const [repeatPassErrorMessage, setRepeatPassErrorMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setRepeatPassErrorMessage("Passwords do not match");
      return;
    }

    if (password.length < 7) {
      setPassErrorMessage("Password must be at least 7 characters long");
      return;
    }

    const formData = {
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    setEmail("");
    setPassword("");
    setRepeatPassword("");
    setEmailErrorMessage("");
    setPassErrorMessage("");
    setRepeatPassErrorMessage("");

  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="w-full font-RegisterFont">
        <div className="flex text-white w-full justify-center">
          <div className="py-10 md:py-20">
            <img
              className="rounded-full w-[32px] h-[25px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQL_h_IpF_nnjVfbHBJxv8X29QkE4SfRB0v4R3O_zpA&s"
            />
          </div>
        </div>
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[400px] h-[440px]  bg-[#161D2F] px-8 py-8 rounded-[1.25rem]`}
        >
          <h1 className="text-[#fff] text-[32px] mb-6">Sign Up</h1>
          <div className="my-4 md:my-[40px]">
            <SignUpInput
              onChange={handleEmailChange}
              value={email}
              className={`border-b-2 border-[#5A698F] text-white placeholder:text-[15px] outline-none w-full py-2 px-5 bg-transparent text-[15px] mb-4`}
              type="email"
              placeholder="Email address"
              name="email"
            />{" "}
            {emailErrorMessage && (
              <p className="text-red-500">{emailErrorMessage}</p>
            )}
            <SignUpInput
              onChange={handlePasswordChange}
              value={password}
              className="border-b-2 border-[#5A698F] text-white placeholder:text-[15px] outline-none w-full py-2 px-5 bg-transparent text-[15px] mb-4"
              type="password"
              placeholder="Password"
              name="password"
            />
            {passErrorMessage && (
              <p className="text-red-500">{passErrorMessage}</p>
            )}
            <SignUpInput
              onChange={handleRepeatPasswordChange}
              value={repeatPassword}
              className="border-b-2 border-[#5A698F] text-white placeholder:text-[15px] outline-none w-full py-2 px-5 bg-transparent text-[15px] mb-4"
              type="password"
              placeholder="Repeat password"
              name="repeatPassword"
            />
            {repeatPassErrorMessage && (
              <p className="text-red-500">{repeatPassErrorMessage}</p>
            )}
          </div>
          <button
            type="submit"
            className="flex items-center bg-[#FC4747] rounded-md w-full justify-center text-white py-3 mb-4"
          >
            Create an account
          </button>
          <div className="flex w-full justify-center gap-2 mt-8 sm:mt-0">
            <p className="text-white text-[15px]">Already have an account?</p>
            <Link href="/pages/Register/Login">
              <p className="text-[#FC4747] text-[15px] cursor-pointer">Login</p>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
