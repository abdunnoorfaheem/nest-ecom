import React from 'react';
import Image from './Image';
import ProductONE from "/src/assets/productOne.png";
import Heading from './Heading';
import SSS  from "/src/assets/sss.png";
import { LuShoppingCart } from "react-icons/lu";

const Product = () => {
  return (
    <>
      <div className="p-[25px] border-2 border-[#ECECEC] w-[24%] rounded-[15px]">
        <div className="">
          <Image imgSrc={ProductONE}/>
        </div>
        <Heading text={"Fresh Fruit"} tagName={"h4"} className={"text-[12px] text-[#ADADAD]"}/>
        <Heading text={"Seeds of Change Organic Red Rice"} tagName={"h4"} className={"w-[133px] text-[16px] text-[#253D4E] font-bold"}/>
        <div className="flex items-center">
          <div className="">
            <Image imgSrc={SSS}/>
          </div>
          <div className="text-[#B6B6B6]">1</div>
        </div>
        <div className="flex items-center gap-x-2">
          <Heading text={"By"} tagName={"h4"} className={"text-[16px] text-[#B6B6B6]"}/>
          <Heading text={"NestFood"} tagName={"h4"} className={"text-[16px] text-[#3BB77E]"}/>
        </div>
        <div className="flex items-center justify-between">
         <div className="">
          <Heading text={"$28.85"} tagName={"h4"} className={"text-[18px] text-[#3BB77E] font-bold"}/>
         </div>
         <div className="">
          <Heading text={"$32.80"} tagName={"h4"} className={"text-[14px] text-[#ADADAD] font-semibold"}/>
         </div>
         <div className="">
          <button className='flex items-center text-[#29A56C] gap-x-1 bg-[#DEF9EC] px-5 py-2'><LuShoppingCart/> Add</button>
         </div>
        </div>
      </div>
    </>
  )
}

export default Product
