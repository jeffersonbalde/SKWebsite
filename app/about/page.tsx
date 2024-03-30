"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

const aboutPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);
  return (
    <div className="flex flex-col">
      <div className="pt-32 bg-color-blue w-full py-9">
        <motion.h1
          className="font-semibold text-3xl lg:text-4xl text-color-white-smoke text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 0.7 },
          }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>
      </div>
      <div className="relative flex flex-col lg:flex-row justify-between items-center w-[24rem] lg:w-[60rem] xl:w-[70rem] m-auto my-9 lg:my-20 gap-9 lg:gap-14 px-8">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 0.7 },
          }}
          viewport={{ once: true }}
          style={{ y: imgScroll1 }}
        >
          <Image
            src="/dianaduran.png"
            alt="Diana Rose Duran"
            width={1300}
            height={500}
            className="w-80 lg:w-[70rem]"
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-5 lg:gap-6 text-color-dark-blue"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.6, duration: 0.9 },
          }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <Image src="/line.svg" alt="line" width={50} height={50} />
            <h1 className="font-medium text-lg lg:text-xl">SK Chairwoman</h1>
          </div>
          <h1 className="font-semibold text-2xl lg:text-4xl">
            Diana Rose ‘Yan’ Duran
          </h1>
          <div className="">
            <h1 className="font-medium text-base lg:text-lg leading-relaxed">
              SK Chairwoman Diana Rose ‘Yan’ Duran, an esteemed advocate for the
              welfare of working people, has been an integral part of our
              district&apos;s growth and development. Her tireless dedication to
              serving the community has left an indelible mark on the lives of
              those she represents.
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-1 -z-40 left-10 lg:left-[44rem] lg:bottom-9"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.6, duration: 0.9 },
          }}
          viewport={{ once: true }}
        >
          <Image
            src="/philoverlay.png"
            alt="philoverlay"
            width={500}
            height={500}
          />
        </motion.div>
      </div>

      <div className="flex- flex-col justify-center px-9 my-7">
        <h1 className="font-bold text-2xl text-color-dark-blue border-b-2 border-slate-400 ">
          History of Barangay Lumbia
        </h1>
        <div className=""></div>
      </div>
    </div>
  );
};

export default aboutPage;
