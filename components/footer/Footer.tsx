"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-color-black-grey w-full h-[46rem] lg:h-96 flex flex-col justify-between ">
      <div className="py-8 lg:py-10 flex flex-col lg:flex-row justify-around">
        <motion.div
          className="text-color-white-smoke flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.8 },
          }}
          viewport={{ once: true }}
        >
          <Image src="/sklogo.png" alt="SK Lumbia" width={150} height={150} />
          <h1 className="uppercase font-bold text-lg">SANGGUNIANG KABATAAN</h1>
          <h1 className="font-semibold text-base">Barangay Lumbia</h1>
        </motion.div>
        <motion.div
          className="text-color-white-smoke px-9 mt-14 flex flex-col gap-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.9 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-xl">More Pages</h1>
          <div className="">
            <ul className="flex flex-col gap-2 text-base font-medium">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/members">
                <li>Members</li>
              </Link>
              <Link href="https://www.facebook.com/skbrgylumbia">
                <li>Get In Touch</li>
              </Link>
            </ul>
          </div>
        </motion.div>
        <motion.div
          className="mt-14 px-9 flex flex-col gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 1 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-xl text-color-white-smoke">
            Follow Us Online
          </h1>
          <Link href="https://www.facebook.com/skbrgylumbia">
            <h1 className="bg-color-blue text-color-white-smoke py-2 px-7 w-32 rounded-2xl text-[1rem]">
              facebook
            </h1>
          </Link>
        </motion.div>
      </div>
      <div className="bg-[#191B1B] h-16 w-full">
        <motion.h1
          className="uppercase text-color-white-smoke text-sm text-center font-medium py-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 1 },
          }}
          viewport={{ once: true }}
        >
          © 2024 | COPYRIGHT: SANGUNIANG KABATAAN, <br />
          BARANGAY LUMBIA
        </motion.h1>
      </div>
    </div>
  );
};

export default Footer;
