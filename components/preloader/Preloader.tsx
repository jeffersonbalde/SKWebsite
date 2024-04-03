"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import "./Preloader.css";
import { preLoaderAnim } from "../animations";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>
          <div className="">
            <Image src="/sklogo.png" alt="SK Lumbia" height={300} width={300}/>
          </div>
        </span>
        <span>SANGUNIANG KABATAAN</span>
        <span>Barangay Lumbia</span>
      </div>
    </div>
  );
};

export default Preloader;
