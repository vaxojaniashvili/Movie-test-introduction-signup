import React from 'react'

const SignUpInput = ({type,placeholder,className,name,onChange,value,onKeyDown}:any) => {
  return (
    <input onKeyDown={onKeyDown} className={className} type={type} placeholder={placeholder} name={name} onChange={onChange} />
  )
}

export default SignUpInput;