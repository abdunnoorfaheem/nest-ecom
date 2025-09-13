import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../Image";
import BannerImg from "/src/assets/banner.png";
import Slider from "react-slick";
import { GoDotFill } from "react-icons/go";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div>
        <ul className=""> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div>
        <GoDotFill className="absolute bottom-10 text-[#3BB77E]"/>
      </div>
    )
  };
  return (
    <>
      <div className="">
        <Slider {...settings}>
          <div>
            <Image imgSrc={BannerImg} />
          </div>
          <div>
            <Image imgSrc={BannerImg} />
          </div>
          <div>
            <Image imgSrc={BannerImg} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
