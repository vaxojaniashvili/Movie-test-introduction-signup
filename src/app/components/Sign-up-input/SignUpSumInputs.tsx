import React from 'react'
import SignUpInput from './SignUpInput'

const SignUpSumInputs = () => {
  return (
    <>
          <SignUpInput
            className="border-b-2 border-[#5A698F] text-white placeholder:text-[15px] outline-none w-full py-2 px-5 bg-transparent text-[15px] mb-4"
            type="email"
            placeholder="Email address"
          />
          <SignUpInput
            className="border-b-2 border-[#5A698F] text-white placeholder:text-[15px] outline-none w-full py-2 px-5 bg-transparent text-[15px] mb-4"
            type="password"
            placeholder="Password"
          />
          <SignUpInput
            className="border-b-2 border-[#5A698F] text-white placeholder:text-[15px] outline-none w-full py-2 px-5 bg-transparent text-[15px] mb-4"
            type="password"
            placeholder="Repeat password"
          />
    </>
  )
}

export default SignUpSumInputs