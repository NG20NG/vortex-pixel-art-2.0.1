//
//
//
import { hsvaToRgbaString } from "@uiw/color-convert";
//
//
//

import { useState } from "react";

//
type hsvaType = { h: number; s: number; v: number; a: number };
export const toRgba = (hsva: hsvaType) => hsvaToRgbaString(hsva);
//
const useConvertColor = (color: hsvaType) => {
  const [hsva] = useState(color);
  const rgba = () => {
    return hsvaToRgbaString(hsva);
  };
  return { hsva, rgba };
};
