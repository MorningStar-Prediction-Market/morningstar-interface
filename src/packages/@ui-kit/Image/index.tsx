"use client";
import Image, { StaticImageData } from "next/image";
import ImageDemo from "@/assets/images/demo.svg";
import { HTMLProps, useEffect, useState, useRef } from "react";
import LoadingIcon from "../Loading/LoadingIcon";
import clsx from "clsx";

export interface ImageProps {
  width?: number;
  height?: number;
  src: string | undefined;
  alt?: string;
  className?: HTMLProps<HTMLButtonElement>["className"];
  unLoading?: boolean;
}

const ImageKit: React.FC<ImageProps> = (props) => {
  const {
    width = 1000,
    height = 1000,
    src,
    alt = "",
    className,
    unLoading = false,
  } = props;

  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(ImageDemo);
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(true); // useRef to track if component is mounted

  const handleError = () => {
    if (isMounted.current) {
      setImageSrc(ImageDemo);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    if (isMounted.current) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isMounted.current = true;

    if (src == "") {
      setImageSrc(ImageDemo);
      setIsLoading(false);
    }

    if (src && src !== "") {
      setImageSrc(src);
      setIsLoading(false);
    } else {
      setImageSrc(ImageDemo);
    }

    return () => {
      isMounted.current = false; // Cleanup: set isMounted to false on unmount
    };
  }, [src]);

  const classes = clsx("object-cover", className);
  const loadingClasses = clsx(
    "grid aspect-square place-items-center",
    className,
  );

  return (
    <>
      {isLoading && !unLoading ? (
        // <div className={loadingClasses}>
        //   {/* <LoadingIcon /> */}
        // </div>
        <div className={loadingClasses}></div>
      ) : (
        <Image
          width={width}
          height={height}
          src={imageSrc}
          alt={alt}
          className={classes}
          onError={handleError}
          onLoad={handleLoad}
        />
      )}
    </>
  );
};

export default ImageKit;
