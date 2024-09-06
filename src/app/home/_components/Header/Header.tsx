"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Logo from "@/assets/images/logo.png";
import MorningStar from "@/assets/svg/morning_star.svg";

import "./Header";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseLeave = () => {
    setTimeout(() => setIsMenuOpen(false), 150);
  };

  return (
    <nav className="w-full bg-header/70 flex items-center lg:px-8 lg:py-2 justify-between px-4 py-1">
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
          <button className="text-secondary font-bold uppercase hidden sm:block">
            Explore
          </button>
          <button className="text-title font-bold uppercase hidden sm:block">
            My bet
          </button>
          <button className=" font-bold uppercase bg-card_bg text-text rounded-sm px-4 py-2 border border-primary">
            Connect wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
