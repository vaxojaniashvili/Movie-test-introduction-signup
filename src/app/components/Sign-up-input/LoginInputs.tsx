import React from 'react'
import SignUpInput from './SignUpInput'

const LoginInputs = () => {
  return (
    <>
          <SignUpInput
            className="border-b-2 border-[#5A698F] text-white placeholder:text-[15px] outline-none w-full py-2 px-5 bg-transparent text-[15px] mb-4"
            type="email"
            placeholder="Email address"
            name="email"
          />
          <SignUpInput
            className="border-b-2 border-[#5A698F] text-white placeholder:text-[15px] outline-none w-full py-2 px-5 bg-transparent text-[15px] mb-4"
            type="password"
            placeholder="Password"
            name="password"
          />
    </>
  )
}

export default LoginInputs