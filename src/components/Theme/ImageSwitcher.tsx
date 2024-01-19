"use client";
import React from "react";

import { useTheme } from "next-themes";
import Image from "next/image";

interface ImageSwitcherProps {
  url: string;
  width: number;
  height: number;
  quality: number;
}
const ImageSwitcher = ({ url, width, height, quality }: ImageSwitcherProps) => {
  const { theme, systemTheme } = useTheme();
  return (
    <>
      {systemTheme === "dark" ? (
        <>
          {theme === "dark" ? (
            <Image
              src={`${url}-dark.jpg`}
              alt="product preview"
              width={width}
              height={height}
              quality={quality}
              className="rounded-md shadow-2xl"
            />
          ) : (
            <Image
              src={`${url}-light.jpg`}
              alt="product preview"
              width={width}
              height={height}
              quality={quality}
              className="rounded-md shadow-2xl"
            />
          )}
        </>
      ) : (
        <>
          {theme === "light" ? (
            <Image
              src={`${url}-light.jpg`}
              alt="product preview"
              width={width}
              height={height}
              quality={quality}
              className="rounded-md shadow-2xl"
            />
          ) : (
            <Image
              src={`${url}-dark.jpg`}
              alt="product preview"
              width={width}
              height={height}
              quality={quality}
              className="rounded-md shadow-2xl"
            />
          )}
        </>
      )}
    </>
  );
};

export default ImageSwitcher;
