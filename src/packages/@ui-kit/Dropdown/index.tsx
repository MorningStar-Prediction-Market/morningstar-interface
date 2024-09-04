"use client";
import React, { HTMLProps, useEffect, useRef, useState } from "react";
import Button from "../Button";
import clsx from "clsx";
import DropdownItem from "./DropdownItem";
import "../styles/anni.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

export interface DropdownProps {
  className?: HTMLProps<HTMLButtonElement>["className"];
  classContainer?: HTMLProps<HTMLButtonElement>["className"];
  itemsUI?: any[];
  defaultValue?: any;
  title?: string;
  onSelected: (index: number) => void;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    itemsUI,
    defaultValue,
    onSelected,
    className,
    classContainer,
    title,
  } = props;
  const dropdownRef = useRef<any>(null);

  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsShowDropdown(false);
    }
  };

  const handleSelected = (index: number) => {
    onSelected(index);
    setIsShowDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const defaultCSS =
    "relative w-full flex h-10 gap-2 cursor-pointer items-center justify-start whitespace-nowrap rounded-md border border-line px-3 py-2 text-sm ring-offset-background transition-colors  disabled:pointer-events-none disabled:opacity-50";
  const animationClass = isShowDropdown ? "anni-item-show" : "anni-item-hide";

  const classes = clsx(defaultCSS, className);

  const defaultCSSElement =
    "z-50 absolute top-16  left-0 grid bg-white mt-[1px] w-full transition-all gap-1 rounded-md p-1 anni-item-show max-w-lg gap-1 border border-line p-1 shadow-lg sm:max-w-[425px] p-1";
  const classesElement = clsx(defaultCSSElement, animationClass);

  const classesContainer = clsx("relative flex flex-col gap-2", classContainer);

  return (
    <div className={classesContainer} ref={dropdownRef}>
      {title && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {title}
        </label>
      )}
      <button
        className={classes}
        onClick={() => setIsShowDropdown(() => !isShowDropdown)}
      >
        {defaultValue?.icon}
        <p className="flex-1 whitespace-nowrap text-start">
          {defaultValue?.title}
        </p>
        {isShowDropdown ? (
          <BiSolidUpArrow className="text-xs" />
        ) : (
          <BiSolidDownArrow className="text-xs" />
        )}
      </button>

      {isShowDropdown && (
        <div className={classesElement}>
          {itemsUI?.map((item, index) => (
            <DropdownItem
              key={index}
              title={item.title}
              icon={item.icon}
              onClick={() => handleSelected(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
