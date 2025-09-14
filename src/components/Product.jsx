import React from 'react';
import Image from './Image';
import ProductONE from "/src/assets/productOne.png";
import Heading from './Heading';
import SSS  from "/src/assets/sss.png";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { addtocart } from '../slices/addToCartSlice';

const Product = ({productIMG,productCATEGORY,productTITLE,productPRICE,}) => {
  let dispatch=useDispatch();
  let handleAddToCart=()=>{
    dispatch(addtocart({
      productImg:productIMG,
      productCategory:productCATEGORY,
      title:productTITLE,
      price:productPRICE,
      quantity:1
    }))
    
  }
  return (
    <>
      <div className="p-[25px] border-2 border-[#ECECEC]  rounded-[15px]">
        <div className="">
          <Image imgSrc={productIMG} className={"m-auto w-[182px]"}/>
        </div>
        <Heading text={productCATEGORY} tagName={"h4"} className={"text-[12px] text-[#ADADAD]"}/>
        <Heading text={productTITLE} tagName={"h4"} className={"w-[200px] text-[16px] text-[#253D4E] font-bold pt-[5px] pb-[10px]"}/>
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
          <Heading text={productPRICE} tagName={"h4"} className={"text-[18px] text-[#3BB77E] font-bold"}/>
         </div>
         <div className="">
          <del className='text-[#ADADAD]'> 
          <Heading text={"$32.80"} tagName={"h4"} className={"text-[14px] text-[#ADADAD] font-semibold"}/>
          </del>
         </div>
         
         <div className="">
          <button className='flex items-center text-[#29A56C] gap-x-1 bg-[#DEF9EC] px-5 py-2 rounded-[4px] ' onClick={handleAddToCart}><LuShoppingCart/> Add</button>
         </div>
        </div>
      </div>
    </>
  )
}

export default Product
