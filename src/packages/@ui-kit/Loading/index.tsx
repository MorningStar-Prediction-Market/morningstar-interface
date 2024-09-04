import React, { useState } from "react";
import ReactDOM from "react-dom";

export interface LoadingProps {
  isShow: boolean;
}

const LoadingHeader: React.FC<LoadingProps> = (props) => {
  const { isShow } = props;

  return isShow
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="loader fixed left-0 right-0 top-0 z-50 h-[2px] w-full"></div>
        </React.Fragment>,
        document.body,
      )
    : null;
};

export default LoadingHeader;
