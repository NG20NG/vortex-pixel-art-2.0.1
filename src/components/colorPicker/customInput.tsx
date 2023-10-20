//
import cp from "@/style/CanvasComponents/colorPicker/colorPicker.module.css";
import { hsvaToHex } from "@uiw/color-convert";
import transparentBg from "@/assets/colorPicker/patternTransparent.png";

const CustomInput = ({ color, setHsva }: any) => {
  return (
    <input
      type="range"
      defaultValue={100}
      className={cp.slider}
      onChange={({ target }: { target: any }) => {
        setHsva((prev: any) => ({ ...prev, a: target.value / 100 }));
      }}
      style={{
        backgroundImage: `linear-gradient(to left,${hsvaToHex(color)},
      transparent),url(${transparentBg.src})`,
      }}
    />
  );
};

export default CustomInput;
