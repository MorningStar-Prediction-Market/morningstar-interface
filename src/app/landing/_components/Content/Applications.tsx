import Image from "next/image";
import Application from "@/assets/images/Applications.png";
import TechApplication from "@/assets/images/tech_application.png";
import { DeargodFont } from "@/assets/font";

const Applications = () => {
  return (
    <div className="flex justify-center items-center lg:gap-32 gap-8 flex-wrap lg:px-[124px] sm:px-20 px-10 lg:mt-[340px] mt-32">
      <Image
        src={TechApplication}
        alt="SectionTech"
        className="xl:w-[487px] xl:h-[472px] w-[320px] h-[310px]  "
      />
      <div className="flex flex-1 flex-col  lg:max-w-[690px] sm:min-w-[450px]">
        <Image
          src={Application}
          alt="Application"
          className="xl:w-[434px] xl:h-[58px] md:w-[380px] md:h-[50px] w-[250px] h-[40px] "
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
            <div className="lg:text-base sm:text-sm text-[10px]  whitespace-pre-line text-primary/75 font-semibold relative ">
              Data from prices to other events are constantly updated from major
              exchanges such as Binance, Bybit, OKX,.. and many other financial
              platforms. It&apos;s all verified on the blockchain in a
              transparent way.
            </div>
          </div>
          <div className="mt-12">
            <div
              className={`${DeargodFont.className} text-primary lg:text-[32px] sm:text-[24px] uppercase mt-4`}
            >
              mobile friendly & convenient
            </div>
            <div className="lg:text-base sm:text-sm text-[10px]  whitespace-pre-line text-primary/75 font-semibold relative ">
              Trade easily from any device with our mobile-optimized web app.
              Full trading functionality at your fingertips.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
