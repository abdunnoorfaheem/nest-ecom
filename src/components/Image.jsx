import React from 'react'

const Image = ({className,imgSrc}) => {
  return (
    <>
     <img src={imgSrc} alt="" className={`${className}`} /> 
    </>
  )
}

export default Image
