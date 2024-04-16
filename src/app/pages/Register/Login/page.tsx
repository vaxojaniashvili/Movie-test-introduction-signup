"use client"
import LoginInputs from "@/app/components/Sign-up-input/LoginInputs";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const itemFromLocalStorage = localStorage.getItem("formData");
    if (itemFromLocalStorage) {
      setFormData(JSON.parse(itemFromLocalStorage));
    }
  }, []);
  console.log(formData);
  const validate = (values: FormData) => {
    const errors: Partial<FormData> = {};

    if (!values.email) {
      errors.email = "Please enter email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required password";
    } else if (values.password.length < 7) {
      errors.password = "Password must be at least 7 characters long";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: formData.email,
      password: formData.password,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      // Handle form submission, e.g., sending data to server
      // localStorage.setItem("formData", JSON.stringify(values));
      resetForm();
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
              alt="Logo"
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[400px] h-[440px] bg-[#161D2F] px-8 py-8 rounded-[1.25rem]">
          <h1 className="text-[#fff] text-[32px] mb-6">Login</h1>
          <div className="my-4 md:my-[40px]">
            <LoginInputs />
          </div>
          <button
            type="submit"
            className="flex items-center bg-[#FC4747] rounded-md w-full justify-center text-white py-3 mb-4 my-10"
          >
            Login to your account
          </button>
          <div className="flex w-full justify-center gap-2 mt-16 sm:mt-10">
            <p className="text-white text-[15px]">Don’t have an account?</p>
            <Link href="/pages/Register/Sign-up">
              <p className="text-[#FC4747] text-[15px] cursor-pointer">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
