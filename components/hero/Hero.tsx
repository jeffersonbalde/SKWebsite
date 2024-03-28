"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero-container h-screen w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-6 z-20">
        <motion.h1
          className="font-normal text-xl lg:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.7 },
          }}
          viewport={{ once: true }}
        >
          Welcome to the Website of
        </motion.h1>
        <div className="flex flex-col items-center gap-3 justify-center text-wrap text-center">
          <motion.h1
            className="font-bold text-5xl lg:text-7xl leading-snug italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.8 },
            }}
            viewport={{ once: true }}
          >
            Barangay Lumbia
          </motion.h1>
          <motion.h1
            className="font-bold text-5xl lg:text-7xl leading-snug italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 1 },
            }}
            viewport={{ once: true }}
          >
            SANGGUNIANG KABATAAN
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
