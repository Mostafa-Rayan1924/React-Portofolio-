import MainTitle from "./MainTitle";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

import img from "../img/testimonials/testimonial-2.webp";
const Testimonials = () => {
  return (
    <div className="py-[100px] bg-secondBody" id="testimonials">
      <MainTitle stroke={"People"} title={"What Other People Say"} />
      <div className="container flex items-center justify-between gap-10">
        <div className="w-[30%] hidden md:flex">
          <img className="rounded-lg" src={img} />
        </div>
        <div className="w-full md:w-[70%] border border-gray-800  ">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper w-full h-[320px]">
            <SwiperSlide>
              <div className="p-10 text-white">
                <h2 className="text-lg md:text-2xl mb-5 ">
                  Swiper React components will likely to <br /> be removed in
                  future versions.
                </h2>
                <span className="text-mainColor">Mostafa Rayan</span>
                <p className="text-gray-400">Programmer in ismailia</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-10 text-white">
                <h2 className="text-lg md:text-2xl mb-5 ">
                  Swiper React components will likely to <br /> be removed in
                  future versions.
                </h2>
                <span className="text-mainColor">Ahmed Salah</span>
                <p className="text-gray-400">Teacher in ismailia</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-10 text-white">
                <h2 className="text-lg md:text-2xl mb-5 ">
                  Swiper React components will likely to <br /> be removed in
                  future versions.
                </h2>
                <span className="text-mainColor">Rawan Morgan</span>
                <p className="text-gray-400">Teacher in ismailia</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-10 text-white">
                <h2 className="text-lg md:text-2xl mb-5 ">
                  Swiper React components will likely to <br /> be removed in
                  future versions.
                </h2>
                <span className="text-mainColor">Abdo Hussien</span>
                <p className="text-gray-400">Photographer in ismailia</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
