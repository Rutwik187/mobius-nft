"use client";
import { Bitcoin, MoveLeft, Timer } from "lucide";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import {
  FaAngleLeft,
  FaArrowLeft,
  FaArrowRight,
  FaBitcoin,
  FaClock,
  FaTimes,
  FaTimesCircle,
} from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";

export default function TreningAuctions() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [swiper, setSwiper] = useState<SwiperClass>();
  const sliderRef = useRef<SwiperRef>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-5xl" data-aos="fade-right" data-aos-once>
        Trening Auctions
      </h2>
      <div className="flex justify-between items-stretch max-md:flex-col">
        <p
          className="text-white/70 max-w-lg"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-once
        >
          Lorem ipsum dolor sit amet, consectetur adipisc elit amet. Consectetu
          at it lrorem ipsum dolor sit amet.
        </p>
        <div
          className="flex gap-3 text-xl font-bold max-md:w-full max-md:mt-2"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-once
        >
          <button
            className="border rounded-sm px-4 grid place-items-center hover:bg-white/20 active:bg-white/10 max-md:w-full max-md:py-3"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
          <button
            className="border rounded-sm px-4 grid place-items-center hover:bg-white/20 active:bg-white/10 max-md:w-full max-md:py-3"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Swiper
        style={{
          height: 550,
          // @ts-ignore
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        ref={sliderRef}
        spaceBetween={50}
        speed={1000}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          830: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSwiper={setSwiper}
        onSlideChange={(s) => {
          setActiveSlide(s.activeIndex);
        }}
        centeredSlides={true}
        modules={[Navigation, Autoplay]}
        className="w-full items-center"
      >
        {activeSlide}
        <SwiperSlide>
          <section className="bg-dark-blue-card-bg p-5 mx-5 rounded-xl max-w-xs shadow-2xl border-2 border-gray-100">
            <a
              href="#"
              className="group block relative rounded-md overflow-hidden"
            >
              <img src="/images/image-equilibrium.jpg" alt="equilibrium" />
            </a>

            <h1>
              <a
                href="#"
                className="block text-white my-4 font-semibold text-lg hover:text-cyan"
              >
                Equilibrium #3429
              </a>
            </h1>

            <p className="text-soft-blue font-light">
              Our Equilibrium collection promotes balance and calm.
            </p>

            <div className="flex justify-between items-center mt-4">
              <div className="flex text-cyan space-x-2 items-center">
                <FaBitcoin />
                <p>0.041 ETH</p>
              </div>
              <div className="flex items-center text-soft-blue space-x-2 whitespace-nowrap">
                <FaClock />
                <p>3 days left</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-dark-blue-card-bg p-5 mx-5 rounded-xl max-w-xs shadow-2xl border-2 border-gray-100">
            <a
              href="#"
              className="group block relative rounded-md overflow-hidden"
            >
              <img src="/images/image-equilibrium.jpg" alt="equilibrium" />
            </a>

            <h1>
              <a
                href="#"
                className="block text-white my-4 font-semibold text-lg hover:text-cyan"
              >
                Equilibrium #3429
              </a>
            </h1>

            <p className="text-soft-blue font-light">
              Our Equilibrium collection promotes balance and calm.
            </p>

            <div className="flex justify-between items-center mt-4">
              <div className="flex text-cyan space-x-2 items-center">
                <FaBitcoin />
                <p>0.041 ETH</p>
              </div>
              <div className="flex items-center text-soft-blue space-x-2 whitespace-nowrap">
                <FaClock />
                <p>3 days left</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-dark-blue-card-bg p-5 mx-5 rounded-xl max-w-xs shadow-2xl border-2 border-gray-100">
            <a
              href="#"
              className="group block relative rounded-md overflow-hidden"
            >
              <img src="/images/image-equilibrium.jpg" alt="equilibrium" />
            </a>

            <h1>
              <a
                href="#"
                className="block text-white my-4 font-semibold text-lg hover:text-cyan"
              >
                Equilibrium #3429
              </a>
            </h1>

            <p className="text-soft-blue font-light">
              Our Equilibrium collection promotes balance and calm.
            </p>

            <div className="flex justify-between items-center mt-4">
              <div className="flex text-cyan space-x-2 items-center">
                <FaBitcoin />
                <p>0.041 ETH</p>
              </div>
              <div className="flex items-center text-soft-blue space-x-2 whitespace-nowrap">
                <FaClock />
                <p>3 days left</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-dark-blue-card-bg p-5 mx-5 rounded-xl max-w-xs shadow-2xl border-2 border-gray-100">
            <a
              href="#"
              className="group block relative rounded-md overflow-hidden"
            >
              <img src="/images/image-equilibrium.jpg" alt="equilibrium" />
            </a>

            <h1>
              <a
                href="#"
                className="block text-white my-4 font-semibold text-lg hover:text-cyan"
              >
                Equilibrium #3429
              </a>
            </h1>

            <p className="text-soft-blue font-light">
              Our Equilibrium collection promotes balance and calm.
            </p>

            <div className="flex justify-between items-center mt-4">
              <div className="flex text-cyan space-x-2 items-center">
                <FaBitcoin />
                <p>0.041 ETH</p>
              </div>
              <div className="flex items-center text-soft-blue space-x-2 whitespace-nowrap">
                <FaClock />
                <p>3 days left</p>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
