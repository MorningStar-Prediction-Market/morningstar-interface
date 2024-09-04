import clsx from "clsx";
import { IoCloudyNightOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

export interface ToggleButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "icon" | "no-anni";
  disabled?: boolean;
  actived?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const { actived, onClick, icon, title, children } = props;

  const classes = clsx(
    "inline-flex aspect-square gap-2 h-9 px-4 items-center justify-center rounded-md  hover:bg-line",
    {
      "bg-primary text-white hover:bg-primary/80": actived,
    },
  );

  return (
    <button className={classes} onClick={onClick}>
      {icon && <span className="">{icon}</span>}
      {title && <span className="flex-1 text-start">{title}</span>}
      {children}
      {!actived && <IoIosArrowForward className="text-sm" />}
    </button>
  );
};

export default ToggleButton;
