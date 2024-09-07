import Image from "next/image";
import Space from "@/assets/images/space.png";
import FeaturesText from "@/assets/images/features.png";
import Infinity from "@/assets/images/infinity.png";
import Eye from "@/assets/images/eye.png";
import TechLayer from "@/assets/images/tech_layer.png";
import Compass from "@/assets/images/compass.png";
import { DeargodFont } from "@/assets/font";

const Features = () => {
  return (
    <div className=" flex justify-center items-center gap-4 flex-wrap-reverse xl:pl-[124px] sm:px-20 px-10 lg:mt-[250px] mt-32">
      <div className="flex flex-1 flex-col lg:max-w-[690px] lg:min-w-[500px] sm:min-w-[400px]">
        <Image
          src={FeaturesText}
          alt="FeaturesText"
          className="xl:w-[318px] xl:h-[58px] md:w-[350px] md:h-[65px] w-[220px] h-[40px] "
        />
        <div className="w-full ">
          <div className="mt-12">
            <div
              className={`${DeargodFont.className} text-primary lg:text-[32px] sm:text-[24px] uppercase mt-4`}
            >
              One click trading
            </div>
            <p className="lg:text-base sm:text-sm text-[10px] whitespace-pre-line text-primary/75 font-semibold relative ">
              Maximize your profits with lightning-fast trading on most popular
              markets.
            </p>
          </div>
          <div className="mt-12">
            <div
              className={`${DeargodFont.className} text-primary lg:text-[32px] sm:text-[24px] uppercase mt-4`}
            >
              Transparent & reliable data
            </div>
            <p className="lg:text-base sm:text-sm text-[10px]  whitespace-pre-line text-primary/75 font-semibold relative ">
              Data from prices to other events are constantly updated from major
              exchanges such as Binance, Bybit, OKX,.. and many other financial
              platforms. It&aposs; all verified on the blockchain in a
              transparent platforms. Its all verified on the blockchain in a
              transparent way.
            </p>
          </div>
          <div className="mt-12">
            <div
              className={`${DeargodFont.className} text-primary lg:text-[32px] sm:text-[24px] uppercase mt-4`}
            >
              mobile friendly & convenient
            </div>
            <p className="lg:text-base sm:text-sm text-[10px]  whitespace-pre-line text-primary/75 font-semibold relative ">
              Trade easily from any device with our mobile-optimized web app.
              Full trading functionality at your fingertips.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={Space}
        alt="Space"
        className="xl:w-[611px] xl:h-[511px] md:w-[450px] md:h-[380px] w-[310px] h-[310px]  "
      />
    </div>
  );
};

export default Features;
