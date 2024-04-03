"use client";

import AOS from "aos";

import { useEffect } from "react";
import { heroSlides } from "../data/data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import EventSlides from "./EventSlides";
import { motion } from "framer-motion";

const Events = () => {
  useEffect(() => {
    AOS.init;
    ({ duration: 1000, easing: "ease-in-out", once: false, mirror: false });
  }, []);
  return (
    <div className="mt-[-45px] mb-20 lg:my-11 lg:mb-20">
      <motion.h1
        className="text-3xl lg:text-5xl text-center mb-12 font-bold text-color-dark-blue"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 0.8 },
        }}
        viewport={{ once: true }}
      >
        Accomplishments
      </motion.h1>
      <section className="hero-slider " id="hero-slider ">
        <div className="container-md" data-aos="fade-in">
          <div className="row">
            <div className="col-12">
              <Swiper
                slidesPerView={"auto"}
                speed={500}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{
                  el: ".swiper-pagination",
                  type: "bullets",
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".custom-swipper-button-next",
                  prevEl: ".customer-swiper-button-prev",
                }}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                className="sliderFeaturedPosts"
              >
                {/* {heroSlides.map((slide) => (
                  <SwiperSlide>
                    <EventSlides slide={slide} />
                  </SwiperSlide>
                ))} */}

                <SwiperSlide>
                  <div className="w-full h-[28rem] bg-slate-400 bg-variety-show bg-cover lg:bg-contain text-slate-50 flex flex-col justify-center items-center p-5 gap-5 bg-blend-darken lg:p-10 lg:px-24 text-center">
                    <h1 className="font-medium z-50 text-sm lg:text-base">
                      December 25, 2023
                    </h1>
                    <h1 className="font-bold z-50 text-2xl italic lg:text-5xl">
                      Christmas Variety Show 2023
                    </h1>
                    <h1 className="font-medium z-50 text-base lg:text-2xl">
                      Our SK Council Takes Pride in Showcasing the Incredible
                      Talents of Our Youth at Plaza Luz&apos;s Variety Show!
                      From mesmerizing performances to awe-inspiring acts, our
                      diverse and talented young individuals shined brightly,
                      captivating hearts and minds, and leaving an indelible
                      mark of success on our community&apos;s cultural
                      landscape.
                    </h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[28rem] bg-slate-400 bg-valentines bg-cover lg:bg-contain text-slate-50 flex flex-col justify-center items-center p-5 gap-5 bg-blend-darken lg:p-10 lg:px-24 text-center">
                    <h1 className="font-medium z-50 text-sm lg:text-base">
                      February 16, 2024
                    </h1>
                    <h1 className="font-bold z-50 text-2xl italic lg:text-5xl">
                      Mr. and Mrs. Valentines 2024
                    </h1>
                    <h1 className="font-medium z-50 text-base lg:text-2xl">
                      Reflecting on the unforgettable moments of Mr. and Mrs.
                      Valentines 2024. Grateful for the love, laughter, and
                      memories shared, made possible by the tireless efforts of
                      our amazing Barangay and SK Officials and the support of
                      our cherished Lumbiahanons
                    </h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[28rem] bg-slate-400 bg-sk-training bg-cover lg:bg-contain text-slate-50 flex flex-col justify-center items-center p-5 gap-5 bg-blend-darken lg:p-10 lg:px-24 text-center">
                    <h1 className="font-medium z-50 text-sm lg:text-base">
                      February 26, 2024
                    </h1>
                    <h1 className="font-bold z-50 text-2xl italic lg:text-5xl">
                      SK Mandatory Training
                    </h1>
                    <h1 className="font-medium z-50 text-base lg:text-2xl">
                      The Sangguniang Kabataan secretary and treasurer undergo a
                      transformative training program, mastering record-keeping,
                      communication, and financial management. Guided by
                      mentors, they emerge as architects of transparency and
                      progress, upholding integrity, service, and excellence in
                      their roles.
                    </h1>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-[28rem] bg-slate-400 bg-womens-month bg-cover lg:bg-contain text-slate-50 flex flex-col justify-center items-center p-5 gap-5 bg-blend-darken lg:p-10 lg:px-24 text-center">
                    <h1 className="font-medium z-50 text-sm lg:text-base">
                      March 31, 2024
                    </h1>
                    <h1 className="font-bold z-50 text-2xl italic lg:text-5xl">
                      Women's Month Celebration 2024
                    </h1>
                    <h1 className="font-medium z-50 text-base lg:text-2xl">
                      We're thrilled to reflect on the resounding success of our
                      Women's Month Celebration 2024 as a proud accomplishment
                      within our SK team. This event stood as a testament to our
                      commitment to recognizing and honoring the invaluable
                      contributions of women in our community.
                    </h1>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="custom-swipper-button-next">
                <span className="bi-chevron-right"></span>
              </div>
              <div className="custom-swipper-button-prev">
                <span className="bi-chevron-left"></span>
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
