import Image from "next/image";
import Header from "./_components/Header/Header";
import Background from "@/assets/images/background.png";
import Quote from "@/assets/images/quote.png";
import localFont from "next/font/local";
import Technology from "./_components/Content/Technology";
import WhyUs from "./_components/Content/WhyUs";
import Features from "./_components/Content/Features";
import Applications from "./_components/Content/Applications";
import { BaskervilleFont } from "@/assets/font";
import Footer from "../_components/Footer/Footer";

export default function LandingPage() {
  return (
    <main
      className="relative flex flex-col h-screen bg-gradient-to-b from-white/0 to-background overflow-auto "
      //   style={{ fontFamily: BaskervilleFont.style.fontFamily }}
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="z-10 sticky top-0 right-0 left-0">
        <Header />
      </div>
      <div
        className="w-fullz-1"
        style={{ fontFamily: BaskervilleFont.style.fontFamily }}
      >
        <div className="mx-auto max-w-[1440px] xl:px-8 md:px-4 px-2 ">
          <div className="flex flex-col justify-center items-center lg:mb-[416px] lg:mt-60 md:mb-60 md:mt-40 mb-36 mt-20">
            <Image
              src={Quote}
              alt="MorningStar"
              className="w-[780px] md:h-64 h-32"
            />
            <p
              className={`lg:text-2xl md:text-lg text-sm text-primary font-semibold text-center`}
            >
              The first Prediction Markets protocol on Starknet powers users to
              earn from their predictions.
            </p>
          </div>
        </div>
        <div className="bg-background/3 backdrop-blur-2xl">
          <div className="mx-auto max-w-[1440px] lg:mt-32 pb-32">
            <Technology />
            <WhyUs />
            <Features />
            <Applications />
          </div>
        </div>
        <Footer />
        {/* <div className="w-full h-36 bg-gradient-to-t from-background/3 via-black/70 via-70% to-white/0"></div> */}
      </div>
    </main>
  );
}
