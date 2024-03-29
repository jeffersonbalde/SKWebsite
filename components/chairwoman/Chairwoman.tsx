"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Chairwoman = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
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
        <div className="font-medium">
          <h2 className="text-base lg:text-lg leading-relaxed lowercase">
            &quot;<span className="uppercase">T</span>HE GREATEST LEADER IS NOT
            NECESSARILY THE ONE WHO DOES THE GREATEST THINGS.{" "}
            <span className="uppercase">H</span>E IS THE ONE THAT GETS THE
            PEOPLE TO DO THE GREATEST THINGS.&quot; -{" "}
            <span className="uppercase">R</span>onald{" "}
            <span className="uppercase">R</span>eagan
          </h2>
        </div>
        <div className="">
          <h1 className="font-medium text-base lg:text-lg leading-relaxed">
            SK Chairwoman Diana Rose ‘Yan’ Duran, an esteemed advocate for the
            welfare of working people, has been an integral part of our
            district's growth and development. Her tireless dedication to
            serving the community has left an indelible mark on the lives of
            those she represents.
          </h1>
        </div>
        <Link href="https://www.facebook.com/skbrgylumbia" className="mt-4">
          <motion.button
            className="bg-color-blue text-color-white-smoke font-medium py-3 px-6 rounded-sm lg:text-lg transition-all ease-in-out hover:bg-white hover:text-color-dark-blue hover:shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.7, duration: 1 },
            }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        className="absolute bottom-24 -z-40 left-10 lg:left-[44rem] lg:bottom-9"
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
  );
};

export default Chairwoman;
