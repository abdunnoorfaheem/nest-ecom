import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import Button from "../Button";
import { FaArrowRight, FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";


const Header = () => {
  let [showCart, setShowCart] = useState(false);
  let data =useSelector((state)=>state.addtocart.value)
  return (
    <>
      <div className="py-[25px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Link to={"/"}>
                <Image imgSrc={Logo} />
              </Link>
            </div>
            <div className="relative">
              {/* <input
                type="text"
                placeholder="Search for products"
                className="border-1 border-[#3BB77E] w-[596px] p-[15px] rounded-[7px] outline-0"
              />
              <Button
                className={
                  "rounded-[3px] absolute top-1/2  -right-8  -translate-1/2 "
                }
              >
                Search
              </Button> */}
              <ul className="flex gap-x-4 items-center text-[16px] font-bold text-[#253D4E]">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li>Mega Menu </li>
                <li>Vendors </li>
                <li>Blog</li>
                <li>Pages</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex items-center gap-x-8">
              <button className="text-[#3BB77E] text-[14px] font-medium border-1 border-[#ECECEC] shadow-[5px_5px_15px_0px_rgba(0,0,0,0.05)] py-[7px] pl-[14px] pr-[12px] flex items-center gap-x-2">
                Became Vendor <FaArrowRight />{" "}
              </button>
              <div className="flex gap-x-5">
                <div className="flex items-center gap-x-2">
                  <FaCodeCompare /> Compare
                </div>
                <div className="flex items-center gap-x-2">
                  <FaRegHeart />
                  Wishlist
                </div>
                <div
                  className="flex items-center gap-x-2"
                  onClick={() => {
                    setShowCart(!showCart);
                  }}
                >
                  <IoCartOutline />
                  Cart
                </div>
                <div className="flex items-center gap-x-2">
                  <CiUser />
                  Account
                </div>
              </div>
            </div>
          </Flex>
          {showCart && (
            <div
              className="bg-amber-100 w-[600px] h-screen absolute top-0 right-0 z-100"
              
            >
              <ImCross className="text-[36px]" onClick={() => {
                setShowCart(!showCart);
              }}/>
              <ul className="flex justify-between px-5 py-5 font-bold">
                <li>product</li>
                <li>product Name</li>
                <li>product Price</li>
                <li>product Quantity</li>
                
              </ul>
              <ul className="p-[5px]">
                {
                  data.map((item)=>(
                    <div className="flex justify-between items-center" key={item.id}>
                      <li><Image imgSrc={item.productImg} className={"w-[70px]"}/></li>
                      <li>{item.title}</li>
                      <li>{item.price}</li>
                      <li>{item.quantity}</li>
                    </div>
                  ))
                }
              </ul>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Header;
