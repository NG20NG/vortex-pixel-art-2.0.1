//
//
//
//
import { hsvaToRgbaString } from "@uiw/color-convert";
//

import { CSSProperties } from "react";

type ReturnType = (e: boolean) => CSSProperties;

export const customStyle: ReturnType = (isColorPicker: boolean) => {
  return {
    opacity: isColorPicker ? 1 : 0,
    pointerEvents: isColorPicker ? "auto" : "none",
    transition: "opacity 0.1s",
  };
};
//
//
//
type hsvaType = { h: number; s: number; v: number; a: number };
export const toRgba = (hsva: hsvaType) => hsvaToRgbaString(hsva);
