// src/components/ui/LazyImage.tsx
import React from "react";
import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

/**
 * Wraps the library's LazyLoadImage so you can
 * drop in place of any <img> and get a blur-up placeholder.
 */
export type LazyImageProps = Omit<LazyLoadImageProps, "effect"> & {
  /** choose between 'blur', 'opacity', or 'black-and-white' */
  effect?: "blur" | "opacity" | "black-and-white";
};

export default function LazyImage({
  effect = "blur",
  ...props
}: LazyImageProps) {
  return <LazyLoadImage {...props} effect={effect} />;
}
