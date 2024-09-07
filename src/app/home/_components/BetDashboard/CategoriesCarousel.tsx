"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

type Category = {
  name: string;
};

const CategoriesCarousel = ({ categories }: { categories: string[] }) => {
  const scrollRef = useRef<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Top");
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Function to scroll the list to the left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  // Function to scroll the list to the right
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const checkScrollPosition = () => {
    const scrollElement = scrollRef.current;

    // Check if the user is at the start of the scroll
    setIsAtStart(scrollElement.scrollLeft === 0);

    // Check if the user has scrolled to the end of the list
    const hasReachedEnd =
      scrollElement.scrollLeft + scrollElement.clientWidth >=
      scrollElement.scrollWidth;
    setIsAtEnd(hasReachedEnd);
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    checkScrollPosition(); // Check position on mount

    // Add scroll event listener
    scrollElement.addEventListener("scroll", checkScrollPosition);

    // Cleanup event listener on unmount
    return () => {
      scrollElement.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <div className="relative text-white overflow-hidden">
      {/* Left scroll button */}
      {!isAtStart && (
        <div className="absolute left-0 pl-1 pr-4 top-1/2 transform -translate-y-1/2 shadow-xl bg-gradient-to-r from-gray-900 via-gray-900/70 via-70% to-white/0 ">
          <button
            onClick={scrollLeft}
            className=" bg-gray-800 p-2 rounded-full  shadow-lg hover:shadow-xl transition-shadow"
          >
            <MdArrowBackIos className="text-white text-2xl" />
          </button>
        </div>
      )}

      {/* Scrollable Category List */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-2 py-2 scrollbar-none w-[96vw] "
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)} // Set the selected category on click
            className={`py-2 px-4 rounded-md whitespace-nowrap transition-colors
           ${selectedCategory === category ? "bg-secondary/25 text-secondary border border-secondary" : "bg-white/15 text-text/75"}
           hover:bg-secondary/25 `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right scroll button */}
      {!isAtEnd && (
        <div className="absolute right-0 pr-1 pl-4 top-1/2 transform -translate-y-1/2 shadow-xl bg-gradient-to-l from-black via-gray-900/70 via-70% to-white/0 ">
          <button
            onClick={scrollRight}
            className=" bg-gray-800 p-2 rounded-full  shadow-lg hover:shadow-xl transition-shadow"
          >
            <MdArrowForwardIos className="text-white text-2xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoriesCarousel;
