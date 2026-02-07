import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const phoneImages = [
  "https://futuredesks.com/wp-content/uploads/2024/12/news-app-1.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/edemand-1.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/egrocer-1.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/6am-Mart.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/6-valley.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/Stack-foods-1.png"
  ,"https://futuredesks.com/wp-content/uploads/2024/12/drivemod.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/hexacom.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/demandium.png"
];

export default function PhoneSwiper() {
  const swiperWrappedRef = useRef(null);

  const adjustMargin = () => {
    const screen = window.innerWidth;
    if (swiperWrappedRef.current) {
      swiperWrappedRef.current.style.marginLeft =
        screen <= 520
          ? "0px"
          : screen <= 650
          ? "-50px"
          : screen <= 800
          ? "-100px"
          : "-150px";
    }
  };

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#f0f4ff] to-white py-16 relative text-center overflow-hidden">
   

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        speed={700}
        slideToClickedSlide={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { spaceBetween: 30 },
          640: { spaceBetween: 40 },
          1024: { spaceBetween: 60 }
        }}
        onSwiper={(swiper) => {
          swiperWrappedRef.current = swiper.wrapperEl;
          adjustMargin();
        }}
      >
        {phoneImages.map((src, index) => (
          <SwiperSlide
            key={index}
            className="!w-[260px] flex justify-center items-center"
          >
            <div className="w-full h-[540px] bg-black rounded-[2rem] overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`Phone ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
