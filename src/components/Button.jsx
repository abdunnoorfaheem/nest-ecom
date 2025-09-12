import React from 'react'

const Button = ({children,className}) => {
  return (
    <>
     <button className={`bg-[#3BB77E] text-[14px] outline-0 text-[#fff] py-[13px] px-[22px] ${className}`}>{children}</button> 
    </>
  )
}

export default Button
