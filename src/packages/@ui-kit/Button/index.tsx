"use client";

import clsx from "clsx";
import { HTMLProps } from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: HTMLProps<HTMLButtonElement>["className"];
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "icon"
    | "no-anni"
    | "drawer";
  disabled?: HTMLProps<HTMLButtonElement>["disabled"];
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: HTMLProps<HTMLButtonElement>["onClick"];
  title?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    variant = "primary",
    onClick,
    disabled,
    loading,
    icon,
    title,
  } = props;

  const defaultCSS =
    "inline-flex duration-200 h-9 w-fit text-sm gap-2 font-bold cursor-pointer items-center justify-center whitespace-nowrap rounded-md border border-line px-4 py-2 text-sm ring-offset-card_bg disabled:pointer-events-none disabled:opacity-50 active:scale-90";

  const loadingCSS = "bg-white text-black";

  const renderCSS = () => {
    switch (variant) {
      case "primary": {
        const variantPrimaryCSS =
          "bg-primary !border-none text-card_bg text-white hover:bg-primary/80";
        return variantPrimaryCSS;
      }

      case "outline": {
        const variantOutlineCSS = "bg-transparent hover:bg-line";
        return variantOutlineCSS;
      }

      case "ghost": {
        const variantGhostCSS =
          "bg-transparent border-none hover:text-primary hover:bg-hover/5";
        return variantGhostCSS;
      }

      case "icon": {
        const variantIconCSS = "bg-transparent border-none hover:text-primary";
        return variantIconCSS;
      }

      case "drawer": {
        const variantDrawerCSS =
          "!border-none hover:bg-grays/20 hover:text-primary !items-start !font-normal";
        return variantDrawerCSS;
      }

      default: {
        const variantDefaultCSS = "bg-text text-background hover:bg-text/80";
        return variantDefaultCSS;
      }
    }
  };

  const LoadingSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-loader-circle mr-2 h-4 w-4 animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
    </svg>
  );

  const classes = clsx(defaultCSS, renderCSS(), className, {
    "!bg-white !text-black": loading,
  });

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <LoadingSVG />}
      {title && <span>{title}</span>}
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
