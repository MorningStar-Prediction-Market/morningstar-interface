import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";

interface LineProps {
  className?: HtmlHTMLAttributes<HTMLDivElement>["className"];
}

const Line: React.FC<LineProps> = (props) => {
  const { className } = props;

  const classes = clsx("h-[1px] w-full bg-grays/15", className);

  return <div className={classes}></div>;
};

export default Line;
