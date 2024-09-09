"use client";
import Image from "next/image";
import TechnologyText from "@/assets/images/technology_text.png";
import TechnologyImage from "@/assets/images/technology.png";
import TechLayer from "@/assets/images/tech_layer.png";
import Triangle from "@/assets/images/triangle.png";
import Target from "@/assets/images/target.png";
import { DeargodFont } from "@/assets/font";
import { useEffect, useRef } from "react";

const Technology = () => {
  const scrollRef = useRef<any>(null);
  const isAtEnd = useRef(false);

  const handleWheel = (event: any) => {
    if (scrollRef.current) {
      // Prevent default scrolling behavior
      event.preventDefault();

      // Scroll horizontally
      scrollRef.current.scrollLeft += event.deltaY * 1.5;

      // Check if we've reached the end of the horizontal scroll
      if (
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
        scrollRef.current.scrollWidth
      ) {
        isAtEnd.current = true; // Set to true when at the end
      } else {
        isAtEnd.current = false; // Reset if not at the end
      }
    }
  };
  const handleVerticalScroll = (event: any) => {
    if (isAtEnd.current) {
      // Allow vertical scrolling only if at the end of the horizontal scroll
      event.preventDefault();
      window.scrollBy(0, event.deltaY); // Scroll vertically the window
    } else if (scrollRef.current.scrollLeft === 0)
      window.scrollBy(0, event.deltaY); // Scroll vertically the window
  };

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("wheel", handleVerticalScroll, {
        passive: false,
      });

      // Cleanup function to remove the event listeners
      return () => {
        element.removeEventListener("wheel", handleWheel);
        window.removeEventListener("wheel", handleVerticalScroll);
      };
    }
  }, []);
  return (
    <div className="">
      <div className=" flex lg:justify-between justify-center items-center flex-wrap-reverse">
        <Image
          src={TechnologyText}
          alt="Technology"
          className="xl:w-[395px] xl:h-[72px] md:w-[350px] md:h-[65px] lg:ml-[124px] md:ml-20  w-[220px] h-[40px] "
        />
        <Image
          src={TechnologyImage}
          alt="TechnologyImg"
          className="xl:h-[550px] xl:w-[481px] md:h-[500px] md:w-[450px] h-[250px] w-[250px] mr-10 sm:mr-7 md:mr-0"
        />
      </div>
      <div
        ref={scrollRef}
        className="flex lg:ml-[100px] lg:-mt-40 mt-6 md:ml-20 sm:ml-10 py-8 px-8 gap-4 overflow-x-auto scrollbar-none scroll-smooth "
      >
        <div className="relative bg-dark_brown/15 lg:px-14 lg:py-8 md:px-12 md:py-7 px-4 py-6 flex flex-col items-center min-w-[350px] sm:min-w-[480px] lg:min-w-[588px] sm:h-64 lg:h-72  border border-oranges rounded-2xl overflow-hidden shadow-[0_0_32px_rgba(255,246,149,0.5)]">
          <Image
            src={TechLayer}
            alt="techLayer"
            className="lg:w-[92px] lg:h-[92px] sm:w-[72px] sm:h-[72px] w-[60px] h-[60px]  "
          />
          <div
            className={`${DeargodFont.className} text-primary lg:text-[32px] sm:text-[24px] uppercase mt-4`}
          >
            Built On Starknet
          </div>
          <h2 className="lg:text-base sm:text-sm text-[10px] text-center whitespace-pre-line text-primary font-bold relative drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
            MorningStar is built using StarkNet&apos;s decentralized zk-STARK
            technology, which helps dApps achieve unlimited scale for their
            computations, while leveraging the security of Ethereum.
          </h2>
        </div>
        <div className="relative bg-dark_brown/15 lg:px-14 lg:py-8 md:px-12 md:py-7 px-4 py-6 flex flex-col items-center min-w-[350px] sm:min-w-[480px] lg:min-w-[588px] sm:h-64 lg:h-72  border border-oranges rounded-2xl overflow-hidden shadow-[0_0_32px_rgba(255,246,149,0.5)]">
          <Image
            src={Triangle}
            alt="triangle"
            className="lg:w-[92px] lg:h-[92px] sm:w-[72px] sm:h-[72px] w-[60px] h-[60px]  "
          />
          <p
            className={`${DeargodFont.className} text-primary lg:text-[32px] sm:text-[24px] uppercase mt-4FR`}
          >
            The Quest For Truth
          </p>
          <h2 className="lg:text-base sm:text-sm text-[10px] text-center whitespace-pre-line text-primary font-bold relative drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
            The first Prediction Markets protocol on Starknet powers users to
            earn from their predictions.
          </h2>
        </div>
        <div className="relative bg-dark_brown/15 lg:px-10 lg:py-8 md:px-12 md:py-7 px-4 py-6 flex flex-col items-center min-w-[350px] sm:min-w-[480px] lg:min-w-[588px] sm:h-64 lg:h-72  border border-oranges rounded-2xl overflow-hidden shadow-[0_0_32px_rgba(255,246,149,0.5)]">
          <Image
            src={Target}
            alt="target"
            className="lg:w-[92px] lg:h-[92px] sm:w-[72px] sm:h-[72px] w-[60px] h-[60px]  "
          />
          <p
            className={`${DeargodFont.className} text-primary lg:text-[32px] sm:text-[24px] uppercase mt-4`}
          >
            permissionless decentralization
          </p>
          <h2 className="lg:text-base sm:text-sm text-[10px] text-center whitespace-pre-line text-primary font-bold relative drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
            Decentralization is a core value to us. No single entity controls
            our network, and its distributed governance mechanisms ensure it
            stays that way.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Technology;
