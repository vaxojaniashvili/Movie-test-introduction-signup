import SignUpSumInputs from "@/app/components/Sign-up-input/SignUpSumInputs";
import React from "react";

const SignUp = () => {
  return (
    <div className="w-full font-RegisterFont">
      <div className="flex text-white w-full justify-center">
        <div className="py-10 md:py-20">
          <img
            className="rounded-full w-[32px] h-[25px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQL_h_IpF_nnjVfbHBJxv8X29QkE4SfRB0v4R3O_zpA&s"
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[400px] h-[440px] bg-[#161D2F] px-8 py-8 rounded-[1.25rem]">
        <h1 className="text-[#fff] text-[32px] mb-6">Sign Up</h1>
        <div className="my-4 md:my-[40px]">
          <SignUpSumInputs />
        </div>
        <button className="flex items-center bg-[#FC4747] rounded-md w-full justify-center text-white py-3 mb-4">
          Create an account
        </button>
        <div className="flex w-full justify-center gap-2 mt-8 sm:mt-0">
          <p className="text-white text-[15px]">Already have an account?</p>
          <p className="text-[#FC4747] text-[15px] cursor-pointer">Login</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
