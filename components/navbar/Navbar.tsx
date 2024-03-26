"use client";

import Image from "next/image";
import Links from "./links/Links";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);

  const handleClick = () => {
    setopenMenu(!openMenu);
  };

  return (
    <div className="w-full text-color-black-grey fixed bg-color-white-smoke backdrop-filter bg-opacity-30 backdrop-blur-lg border-b border border-gray-200 shadow-xl">
      <div className="flex items-center justify-between h-full w-full px-4 md:px-14">
        <Link href="/" className="flex items-center">
          <Image
            src="/sklogo.png"
            alt="SK Lumbia Logo"
            width={100}
            height={100}
          />
          <div className="">
            <h1 className="font-bold text-sm md:text-lg">
              SANGUNIANG KABATAAN
            </h1>
            <h1 className="font-normal text-xs md:text-base">
              Barangay Lumbia
            </h1>
          </div>
        </Link>
        <nav className="hidden lg:flex text-base">
          <Links />
          <Link
            href="/getintouch"
            className="ml-14 bg-color-blue text-color-white-smoke px-3 py-2 rounded-sm"
          >
            Get In Touch
          </Link>
        </nav>
        <div className="lg:hidden" onClick={handleClick}>
          <MdMenu size={30} />
        </div>
      </div>
      <div
        className={
          openMenu
            ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div className="" onClick={handleClick}>
            <MdClose size={30} />
          </div>
        </div>
        <div className="flex flex-col py-14 items-center justify-center ">
          <ul>
            <Link href="/">
              <li onClick={() => setopenMenu(false)} className="py-5">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li onClick={() => setopenMenu(false)} className="py-5">
                About
              </li>
            </Link>
            <Link href="/members">
              <li onClick={() => setopenMenu(false)} className="py-5">
                Members
              </li>
            </Link>
            <Link href="/faq">
              <li onClick={() => setopenMenu(false)} className="py-5">
                FAQ
              </li>
            </Link>
            <Link href="/getintouch">
              <li
                onClick={() => setopenMenu(false)}
                className="mt-5 bg-color-blue text-color-white-smoke px-3 py-2 rounded-sm"
              >
                Get In Touch
              </li>
            </Link>
          </ul>
        </div>
        <Link href="https://www.facebook.com/skbrgylumbia">
          <div className="flex justify-center pt-10 items-center">
            <BsFacebook size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
