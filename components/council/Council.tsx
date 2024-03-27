"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

import Image from "next/image";

const Council = () => {
  return (
    <div className="council-container h-screen w-full overflow-hidden">
      <h1 className="text-3xl lg:text-5xl text-center mt-20 font-bold">
        Meet Our Council
      </h1>
      <Swiper
        breakpoints={{
          340: { slidesPerView: 1, spaceBetween: 15 },
          700: { slidesPerView: 3, spaceBetween: 15 },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mt-12 w-[40rem] md:w-[67rem]"
      >
        <SwiperSlide className="px-8">
          <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center shadow-2xl bg-slate-50 rounded-lg">
            <Image
              src="/diana.png"
              alt="Diana Duran"
              width={500}
              height={500}
              className="w-96 h-[22rem]"
            />
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-color-dark-blue text-2xl font-bold">
                Diana Rose Duran
              </h1>
              <h1 className="text-color-dark-blue font-medium text-lg">
                SK Chairwoman
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-10">
          <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center shadow-2xl bg-slate-50 rounded-lg">
            <Image
              src="/alao.png"
              alt="Novem Rey Alao"
              width={500}
              height={500}
              className="w-96 h-[22rem]"
            />
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-color-dark-blue text-2xl font-bold">
                Novem Rey Alao
              </h1>
              <h1 className="text-color-dark-blue font-medium text-lg">
                SK Kagawad
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-8">
          <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center shadow-2xl bg-slate-50 rounded-lg">
            <Image
              src="/lawrence.png"
              alt="Lawrence Lee Monsion"
              width={500}
              height={500}
              className="w-96 h-[22rem]"
            />
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-color-dark-blue text-2xl font-bold">
                Lawrence Lee Monsion
              </h1>
              <h1 className="text-color-dark-blue font-medium text-lg">
                SK Kagawad
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="px-8">
          <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center shadow-2xl bg-slate-50 rounded-lg">
            <Image
              src="/jeff.png"
              alt="Jefferson Balde"
              width={500}
              height={500}
              className="w-96 h-[22rem]"
            />
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-color-dark-blue text-2xl font-bold">
                Jefferson Balde
              </h1>
              <h1 className="text-color-dark-blue font-medium text-lg">
                SK Kagawad
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center px-10">
          <div className="w-80 h-[30rem] flex flex-col shadow-2xl bg-slate-500 rounded-xl">
            5
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center px-10">
          <div className="w-80 h-[30rem] flex flex-col shadow-2xl bg-slate-500 rounded-xl">
            6
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Council;
