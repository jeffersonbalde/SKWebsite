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

const Events = () => {
  useEffect(() => {
    AOS.init;
    ({ duration: 1000, easing: "ease-in-out", once: false, mirror: false });
  }, []);
  return (
    <div>
      <section className="hero-slider my-16 " id="hero-slider">
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
                  <div className="w-full h-96 bg-slate-400 bg-hero-pattern">
                    1
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-80 bg-slate-400">2</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-80 bg-slate-400">3</div>
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
