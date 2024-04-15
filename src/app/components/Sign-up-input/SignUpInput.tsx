import React from 'react'

const SignUpInput = ({type,placeholder,className,name,onChange,value}:any) => {
  return (
    <input className={className} type={type} placeholder={placeholder} name={name} onChange={onChange} value={value} />
  )
}

export default SignUpInput;