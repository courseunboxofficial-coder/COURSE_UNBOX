"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Mentors = () => {
    var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,         
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

  responsive: [
    {
      breakpoint: 1280, // large tablets / small laptops
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024, // tablets
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
};


    return (

        <div className="bg-[#eff5f8] w-full h-[85vh] mx-auto px-4 py-12 slider-container content-center">
            <div className="text-4xl font-bold text-[#01016e] w-full mb-10 pl-20">
                Our Mentors
            </div>
            <Slider {...settings} className="w-[90%] mx-auto">


                <div className="cursor-pointer">
                    <div className="w-[90%] h-[60vh] bg-white rounded-2xl flex transition">
                        <div className="">
                            <Image src="/images/Home/TopCourse.jpg" height={30} width={410} alt="Mentor Image" className="rounded-tr-2xl rounded-tl-xl" />
                        </div>
                    </div>
                </div>

                <div className="cursor-pointer">
                    <div className="w-[90%] h-[60vh] bg-white rounded-2xl flex transition">
                        <div className="">
                            <Image src="/images/Home/TopCourse.jpg" height={30} width={410} alt="Mentor Image" className="rounded-tr-2xl rounded-tl-xl" />
                        </div>
                    </div>
                </div>

                <div className="cursor-pointer">
                    <div className="w-[90%] h-[60vh] bg-white rounded-2xl flex transition">
                        <div className="">
                            <Image src="/images/Home/TopCourse.jpg" height={30} width={410} alt="Mentor Image" className="rounded-tr-2xl rounded-tl-xl" />
                        </div>
                    </div>
                </div>

                <div className="cursor-pointer">
                    <div className="w-[90%] h-[60vh] bg-white rounded-2xl flex transition">
                        <div className="">
                            <Image src="/images/Home/TopCourse.jpg" height={30} width={410} alt="Mentor Image" className="rounded-tr-2xl rounded-tl-xl" />
                        </div>
                    </div>
                </div>

            </Slider>



        </div>
    );
};

export default Mentors;
