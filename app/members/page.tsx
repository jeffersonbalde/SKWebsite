"use client";

import Footer from "@/components/footer/Footer";
import { motion } from "framer-motion";

import Image from "next/image";

const membersPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="pt-[135px] lg:pt-[135px] bg-color-blue w-full py-9 lg:py-7 h-56">
        <motion.h1
          className="font-semibold text-4xl lg:text-5xl text-color-white-smoke text-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 0.7 },
          }}
          viewport={{ once: true }}
        >
          Members
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-col items-center justify-center m-auto my-16"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.4, duration: 0.7 },
        }}
        viewport={{ once: true }}
      >
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
      </motion.div>

      <div className="flex item-center m-auto justify-center flex-wrap px-1 lg:px-24 gap-8 mb-16">
        <motion.div
          className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5, duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.6, duration: 0.6 },
          }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.7, duration: 0.7 },
          }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.8, duration: 0.8 },
          }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.9, duration: 0.9 },
          }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 1, duration: 1 },
          }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.6, duration: 0.6 },
          }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.7, duration: 0.7 },
          }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          className="w-80 h-[30rem] flex flex-col items-center gap-3 justify-center border border-slate-300 bg-slate-100 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.8, duration: 0.8 },
          }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>

      <div className="my-20">
        <motion.h1
          className="text-center text-2xl text-color-dark-blue font-semibold my-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.9, duration: 0.9 },
          }}
          viewport={{ once: true }}
        >
          Committees
        </motion.h1>
        <div className="flex item-center m-auto justify-center flex-wrap px-1 lg:px-24 gap-8 mb-16">
          <motion.div
            className="w-80 h-56 flex flex-col items-center gap-3 justify-center bg-slate-100 rounded-lg border border-slate-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.6, duration: 0.6 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center flex-col px-7 gap-5">
              <h1 className="text-color-dark-blue text-lg font-medium">
                Committee on Social Inclusion & Equity
              </h1>
              <h1 className="text-color-dark-blue font-medium text-base">
                Committee Incharge:
                <span className="font-normal"> Carlos John Luna</span>
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="w-80 h-56 flex flex-col items-center gap-3 justify-center bg-slate-100 rounded-lg border border-slate-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.7, duration: 0.7 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center flex-col px-7 gap-5">
              <h1 className="text-color-dark-blue text-lg font-medium">
                Committee on Environment
              </h1>
              <h1 className="text-color-dark-blue font-medium text-base">
                Committee Incharge:
                <span className="font-normal"> Shane Linao</span>
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="w-80 h-56 flex flex-col items-center gap-3 justify-center bg-slate-100 rounded-lg border border-slate-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.8, duration: 0.8 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center flex-col px-7 gap-5">
              <h1 className="text-color-dark-blue text-lg font-medium">
                Committee on Governance
              </h1>
              <h1 className="text-color-dark-blue font-medium text-base">
                Committee Incharge:
                <span className="font-normal"> Jefferson Balde</span>
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="w-80 h-56 flex flex-col items-center gap-3 justify-center bg-slate-100 rounded-lg border border-slate-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.6, duration: 0.6 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center flex-col px-7 gap-5">
              <h1 className="text-color-dark-blue text-lg font-medium">
                Committee on Education
              </h1>
              <h1 className="text-color-dark-blue font-medium text-base">
                Committee Incharge:
                <span className="font-normal"> Jefferson Balde</span>
              </h1>
            </div>
          </motion.div>
          <motion.div
            className="w-80 h-56 flex flex-col items-center gap-3 justify-center bg-slate-100 rounded-lg border border-slate-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.7, duration: 0.7 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center flex-col px-7 gap-5">
              <h1 className="text-color-dark-blue text-lg font-medium">
                Committee on Active Citizenship
              </h1>
              <h1 className="text-color-dark-blue font-medium text-base">
                Committee Incharge:
                <span className="font-normal"> Leandro Rolloque</span>
              </h1>
            </div>
          </motion.div>

          <motion.div
            className="w-80 h-56 flex flex-col items-center gap-3 justify-center bg-slate-100 rounded-lg border border-slate-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.8, duration: 0.8 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center flex-col px-7 gap-5">
              <h1 className="text-color-dark-blue text-lg font-medium">
                Committee on Peace Building & Security
              </h1>
              <h1 className="text-color-dark-blue font-medium text-base">
                Committee Incharge:
                <span className="font-normal"> Lawrence Lee Monsion</span>
              </h1>
            </div>
          </motion.div>

          <motion.div
            className="w-80 h-56 flex flex-col items-center gap-3 justify-center bg-slate-100 rounded-lg border border-slate-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.9, duration: 0.9 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center flex-col px-7 gap-5">
              <h1 className="text-color-dark-blue text-lg font-medium">
                Committee on Health
              </h1>
              <h1 className="text-color-dark-blue font-medium text-base">
                Committee Incharge:
                <span className="font-normal"> Krizza Bautista</span>
              </h1>
            </div>
          </motion.div>

          <motion.div
            className="w-80 h-56 flex flex-col items-center gap-3 justify-center bg-slate-100 rounded-lg border border-slate-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.9, duration: 0.9 },
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center flex-col px-7 gap-5">
              <h1 className="text-color-dark-blue text-lg font-medium">
                Committee on Global Mobility
              </h1>
              <h1 className="text-color-dark-blue font-medium text-base">
                Committee Incharge:
                <span className="font-normal"> Krizza Bautista</span>
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default membersPage;
