"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Logo from "@/assets/images/logo.png";
import MorningStar from "@/assets/svg/morning_star.svg";

import "./Header";

const Header = () => {
  return (
    <header className="w-full backdrop-blur-md bg-black/50 flex items-center justify-between px-4 py-2 lg:px-8 lg:py-4 z-50">
      <div className="flex items-centers gap-4 flex-1">
        <div className="flex items-center flex-1">
          <Image src={Logo} alt="Logo" className="w-16 h-16" />
          <Image
            src={MorningStar}
            alt="MorningStar"
            className="w-24 h-8 sm:w-48"
          />
        </div>
        <div className="flex items-center gap-6">
          <button className=" font-bold uppercase bg-card_bg text-text text-sm rounded px-4 py-2 border border-secondary">
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
