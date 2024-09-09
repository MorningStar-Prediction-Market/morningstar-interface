import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import MorningStar from "@/assets/svg/morning_star.svg";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full h-[250px] bg-dark_brown/50 pt-8 pb-[39px] backdrop-blur-2xl">
      <div className="flex flex-col items-center flex-1">
        <Image
          src={Logo}
          alt="Logo"
          className="md:w-[100px] md:h-[100px] w-[64px] h-[64px]"
        />
        <Image src={MorningStar} alt="MorningStar" className="md:w-36 md:h-6" />
        <div className="flex items-center gap-4 mt-7">
          <button className="border border-white/50 rounded w-8 h-8 flex items-center justify-center hover:bg-white/20">
            <BsTwitterX className="text-white/50 w-5 h-5s" />
          </button>
          <button className="border border-white/50 rounded  w-8 h-8 flex items-center justify-center hover:bg-white/20">
            <IoLogoDiscord className="text-white/50 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
