"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

const Council = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + "") + "</span>";
    },
  };
  return (
    <div className="council-container h-screen w-full overflow-hidden bg-[##ffffff]">
      <motion.h1
        className="text-3xl lg:text-5xl text-center mt-20 font-bold text-color-dark-blue"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 0.8 },
        }}
        viewport={{ once: true }}
      >
        Meet Our Council
      </motion.h1>
      <motion.div
        className=""
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.6, duration: 1 },
        }}
        viewport={{ once: true }}
      >
        {" "}
        <Swiper
          breakpoints={{
            340: { slidesPerView: 1, spaceBetween: 15 },
            700: { slidesPerView: 3, spaceBetween: 15 },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            // bulletClass: "custom-pagination-bullet",
          }}
          // pagination={pagination}
          modules={[FreeMode, Pagination]}
          className="mt-12 w-[40rem] md:w-[67rem] mySwiper"
        >
          <SwiperSlide className="px-8">
            <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center bg-slate-100 rounded-lg border border-slate-300">
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
                <h1 className="text-color-dark-blue font-semibold text-lg">
                  SK Chairwoman
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-10">
            <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg">
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
                <h1 className="text-color-dark-blue font-semibold text-lg">
                  SK Kagawad
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-8">
            <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg">
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
                <h1 className="text-color-dark-blue font-semibold text-lg">
                  SK Kagawad
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-8">
            <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg">
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
                <h1 className="text-color-dark-blue font-semibold text-lg">
                  SK Kagawad
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-8">
            <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg">
              <Image
                src="/leandro3.png"
                alt="Leandro Rolloque"
                width={500}
                height={500}
                className="w-96 h-[22rem]"
              />
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-color-dark-blue text-2xl font-bold">
                  Leandro Rolloque
                </h1>
                <h1 className="text-color-dark-blue font-semibold text-lg">
                  SK Kagawad
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-8">
            <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg">
              <Image
                src="/beri.png"
                alt="Krizza Bautista"
                width={500}
                height={500}
                className="w-96 h-[22rem]"
              />
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-color-dark-blue text-2xl font-bold">
                  Krizza Bautista
                </h1>
                <h1 className="text-color-dark-blue font-semibold text-lg">
                  SK Kagawad
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-8">
            <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg">
              <Image
                src="/luna.png"
                alt="Carlos John Luna"
                width={500}
                height={500}
                className="w-96 h-[22rem]"
              />
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-color-dark-blue text-2xl font-bold">
                  Carlos John Luna
                </h1>
                <h1 className="text-color-dark-blue font-semibold text-lg">
                  SK Kagawad
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-8">
            <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg">
              <Image
                src="/shane.png"
                alt="Shane Linao"
                width={500}
                height={500}
                className="w-96 h-[22rem]"
              />
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-color-dark-blue text-2xl font-bold">
                  Shane Linao
                </h1>
                <h1 className="text-color-dark-blue font-semibold text-lg">
                  SK Kagawad
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-8">
            <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg">
              <Image
                src="/edgar.png"
                alt="Edgar Boniel"
                width={500}
                height={500}
                className="w-96 h-[22rem]"
              />
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-color-dark-blue text-2xl font-bold">
                  Edgar Boniel
                </h1>
                <h1 className="text-color-dark-blue font-semibold text-lg">
                  SK Treasurer
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-8">
            <div className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg">
              <Image
                src="/joshua.png"
                alt="Joshua Cabanes"
                width={500}
                height={500}
                className="w-96 h-[22rem]"
              />
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-color-dark-blue text-2xl font-bold">
                  Joshua Cabanes
                </h1>
                <h1 className="text-color-dark-blue font-semibold text-lg">
                  SK Secretary
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Council;
