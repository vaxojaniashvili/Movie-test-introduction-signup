import React from 'react'

const SignUpInput = ({type,placeholder,className}:any) => {
  return (
    <input className={className} type={type} placeholder={placeholder} />
  )
}

export default SignUpInput;