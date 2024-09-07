import Image from "next/image";
import SectionTech from "@/assets/images/section_tech.png";
import WhyUsImg from "@/assets/images/why_us.png";
import Infinity from "@/assets/images/infinity.png";
import Eye from "@/assets/images/eye.png";
import TechLayer from "@/assets/images/tech_layer.png";
import Compass from "@/assets/images/compass.png";
import { DeargodFont } from "@/assets/font";

const WhyUs = () => {
  return (
    <div className=" flex justify-center items-center xl:gap-32 gap-9 flex-wrap xl:px-[124px] lg:px-28 sm:px-20 px-10 lg:mt-[340px] mt-20">
      <Image
        src={SectionTech}
        alt="SectionTech"
        className="lg:w-[395px] lg:h-[657px] sm:w-[350px] sm:h-[500px] w-[180px] h-[330px] rotate-90 lg:rotate-0"
      />
      <div className="flex flex-1 flex-col  lg:max-w-[690px] md:min-w-[450px] sm:min-w-[350px] min-w-[200px]">
        <Image
          src={WhyUsImg}
          alt="WhyUsImg"
          className="xl:w-[256px] xl:h-[58px] md:w-[350px] md:h-[65px] w-[220px] h-[40px] "
        />
        <div className="w-full ">
          <div className="mt-12">
            <div className="flex gap-5">
              <Image
                src={Infinity}
                alt="Infinity"
                className="w-[72px] h-[72px] "
              />
              <div
                className={`${DeargodFont.className} text-primary lg:text-[32px] sm:text-[24px] uppercase mt-4`}
              >
                Liquidity guaranteed
              </div>
            </div>
            <p className="lg:text-base sm:text-sm text-[10px]  whitespace-pre-line text-primary/75 font-semibold relative ">
              We always strive to build a prediction market platform that is
              always liquid, meaning that no matter what market is created,
              there will be enough volume for traders to participate.
            </p>
          </div>
          <div className="mt-12">
            <div className="flex gap-5">
              <Image src={Eye} alt="Eye" className="w-[72px] h-[72px] " />
              <div
                className={`${DeargodFont.className} text-primary lg:text-[32px] sm:text-[24px] uppercase mt-4`}
              >
                Leading the trend
              </div>
            </div>
            <p className="lg:text-base sm:text-sm text-[10px]  whitespace-pre-line text-primary/75 font-semibold relative ">
              MorningStar is the pioneering market prediction platform of the
              Starknet ecosystem. We believe that with the power of Starknet,
              this trend will become more explosive in the future.
            </p>
          </div>
          <div className="mt-12">
            <div className="flex gap-5">
              <Image
                src={TechLayer}
                alt="TechLayer"
                className="w-[72px] h-[72px] "
              />
              <div
                className={`${DeargodFont.className} text-primary lg:text-[32px] sm:text-[24px] uppercase mt-4`}
              >
                High security & low fees
              </div>
            </div>
            <p className="lg:text-base sm:text-sm text-[10px]  whitespace-pre-line text-primary/75 font-semibold relative ">
              User assets will always be safe and protected. The fee is many
              times cheaper than Ethereum, inherited from Starknet technology
            </p>
          </div>
          <div className="mt-12">
            <div className="flex gap-5">
              <Image
                src={Compass}
                alt="CompassF"
                className="w-[72px] h-[72px] "
              />
              <div
                className={`${DeargodFont.className} text-primary lg:text-[32px] sm:text-[24px] uppercase mt-4`}
              >
                Diverse products
              </div>
            </div>
            <p className="lg:text-base sm:text-sm text-[10px]  whitespace-pre-line text-primary/75 font-semibold relative ">
              Many diverse pools from cryptocurrency to political events,
              sports,... will give users the most comfort and confident when
              trading according to their strengths.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
