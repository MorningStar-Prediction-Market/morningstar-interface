"use client";
import clsx from "clsx";
import { HTMLProps, useState } from "react";
import { PiEyeSlash } from "react-icons/pi";
import { TbEyeStar } from "react-icons/tb";

export interface InputProps {
  className?: HTMLProps<HTMLInputElement>["className"];
  classContainer?: HTMLProps<HTMLInputElement>["className"];
  disabled?: HTMLProps<HTMLInputElement>["disabled"];
  placeholder?: string;
  title?: string;
  type?: HTMLProps<HTMLInputElement>["type"];
  icon?: React.ReactNode;
  onChange?: any;
  value?: HTMLProps<HTMLInputElement>["value"];
}

const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    onChange,
    disabled,
    title,
    icon,
    placeholder,
    classContainer,
    value,
    type = "text",
  } = props;

  const defaultCSSContainer = "flex flex-col gap-2";
  const classesContainer = clsx(defaultCSSContainer, classContainer);

  const defaultCSS =
    "h-10 flex rounded-full border border-line font-medium hover:border-primary focus:border-primary gap-2 px-3 item-center items-center";

  const classes = clsx(
    defaultCSS,
    {
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:border-line focus:border-line bg-grays/10":
        disabled,
    },
    className,
  );

  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className={classesContainer}>
      {title && (
        <label className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {title}
        </label>
      )}

      <div className={classes}>
        {icon && (
          <div className="grid place-items-center text-grays">{icon}</div>
        )}
        <input
          className="h-full w-full border border-transparent bg-transparent py-2 text-sm text-text outline-none placeholder:text-sm placeholder:font-normal placeholder:text-grays/25"
          disabled={disabled}
          type={isShowPassword ? "text" : type}
          placeholder={placeholder || ""}
          onChange={(e) => onChange(e)}
          value={value}
        />
        {type == "password" && (
          <div onClick={() => setIsShowPassword(!isShowPassword)}>
            {isShowPassword ? <TbEyeStar /> : <PiEyeSlash />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
