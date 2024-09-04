import clsx from "clsx";
import { ConfigProvider, DatePicker, theme } from "antd";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useState } from "react";
dayjs.extend(utc);

interface DatePickupProps {
  timeEnd: any;
  handleDateChange: any;
  title?: string;
}

const DatePickup: React.FC<DatePickupProps> = (props) => {
  const { timeEnd, handleDateChange, title } = props;

  const defaultCSS =
    "h-10 flex rounded-md bg-background border border-line font-medium text-text hover:border-primary focus:border-primary gap-2 item-center";

  const classes = clsx(defaultCSS);

  return (
    <div className="flex flex-col gap-2">
      {title && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {title}
        </label>
      )}
      <div className={classes}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#fff",
              colorPrimaryActive: "#fff",
              colorBgContainer: "#fff",
              colorBgLayout: "#fff",
              borderRadius: 6,
              colorBorderSecondary: "#fff",
              fontFamily: "Pixel Operator Mono",
              fontWeightStrong: 700,
            },
          }}
        >
          <DatePicker
            className="h-full w-full border-none bg-white shadow-none focus-within:border-none focus:border-transparent"
            value={timeEnd} // Convert the state value to Day.js object before passing it to DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            onChange={handleDateChange}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default DatePickup;
