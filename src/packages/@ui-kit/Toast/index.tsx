"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MessageType, MessageTypeEnum } from "./ToastProvider";

interface IToastProps {
  isShow: boolean;
  hide: (isShow: boolean) => void;
  message: React.ReactNode;
  messageType: MessageType;
}

const Toast: React.FC<IToastProps> = (props) => {
  const { message, isShow, hide } = props;
  const [shouldRender, setShouldRender] = useState(isShow);

  useEffect(() => {
    if (isShow) {
      setShouldRender(true);
    }
  }, [isShow]);

  const handleAnimationEnd = () => {
    if (!isShow) {
      setShouldRender(false);
    }
  };

  const defaultCSS =
    "fixed bottom-4 flex flex-col right-4 text-sm z-50 bg-white grid w-full transition-all max-w-lg border border-line shadow-lg  sm:rounded-lg sm:max-w-[425px]";
  const animationClass = isShow ? "anni-item-show" : "anni-item-hide";

  const renderMessageTypeCSS = () => {
    switch (props.messageType) {
      case MessageTypeEnum.SUCCESS: {
        return "bg-success";
      }
      case MessageTypeEnum.ERROR: {
        return "bg-error";
      }
      case MessageTypeEnum.WARNING: {
        return "bg-warning";
      }
      case MessageTypeEnum.INFO: {
        return "bg-info";
      }
      default: {
        return "bg-green-500";
      }
    }
  };

  const classes = clsx(defaultCSS, animationClass);

  const classesMessageType = clsx("w-full h-[3px]", renderMessageTypeCSS());

  return isShow
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            role="dialog"
            data-state={isShow ? "open" : "closed"}
            className={classes}
            // onAnimationEnd={handleAnimationEnd}
          >
            <div className={classesMessageType}></div>
            <div className="p-4">
              <p> {message}</p>
            </div>
          </div>
        </React.Fragment>,
        document.body,
      )
    : null;
};

export default Toast;
