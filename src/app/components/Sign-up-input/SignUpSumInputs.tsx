import React from "react";
import SignUpInput from "./SignUpInput";

const SignUpSumInputs = ({
  onChange,
  value,
  emailClassName,
  passwordClassName,
  rePassClassName,
}: any) => {
  return (
    <>
      <SignUpInput
        className={emailClassName}
        type="email"
        placeholder="Email address"
        name="email"
        onChange={onChange}
        value={value}
      />
      <SignUpInput
        className={passwordClassName}
        type="password"
        placeholder="Password"
        name="password"
      />
      <SignUpInput
        className={rePassClassName}
        type="password"
        placeholder="Repeat password"
        name="password"
      />
    </>
  );
};

export default SignUpSumInputs;
