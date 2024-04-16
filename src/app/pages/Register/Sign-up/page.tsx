"use client";
import React from "react";
import { useFormik } from "formik";
import SignUpInput from "@/app/components/Sign-up-input/SignUpInput";
import Link from "next/link";

const SignUp: React.FC = () => {
  const validate = (values: {
    email: string;
    password: string;
    repeatPassword: string;
  }) => {
    const errors: {
      email?: string;
      password?: string;
      repeatPassword?: string;
    } = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 7) {
      errors.password = "Password must be at least 7 characters long";
    }

    if (!values.repeatPassword) {
      errors.repeatPassword = "Required";
    } else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = "Passwords do not match";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[400px] h-[530px] ${
            formik.errors.email &&
            formik.errors.password &&
            formik.errors.repeatPassword &&
            "h-[600px] xl:h-[540px]"
          } bg-[#161D2F] px-8 py-8 rounded-[1.25rem]`}
        >
          <h1 className="text-[#fff] text-[32px] mb-6">Sign Up</h1>
          <div className="my-4 md:my-[40px]">
            <SignUpInput
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`border-b-2 border-[#5A698F] text-white placeholder:text-[15px] outline-none w-full py-2 px-5 bg-transparent text-[15px] mb-4`}
              type="email"
              placeholder="Email address"
              name="email"
            />
            {formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}

            <SignUpInput
              onChange={formik.handleChange}
              value={formik.values.password}
              className="border-b-2 border-[#5A698F] text-white placeholder:text-[15px] outline-none w-full py-2 px-5 bg-transparent text-[15px] mb-4"
              type="password"
              placeholder="Password"
              name="password"
            />
            {formik.errors.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}
            <SignUpInput
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
              className="border-b-2 border-[#5A698F] text-white placeholder:text-[15px] outline-none w-full py-2 px-5 bg-transparent text-[15px] mb-4"
              type="password"
              placeholder="Repeat password"
              name="repeatPassword"
            />
            {formik.errors.repeatPassword && (
              <p className="text-red-500">{formik.errors.repeatPassword}</p>
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
