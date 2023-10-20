import cp from "@/style/CanvasComponents/colorPicker/colorPicker.module.css";
import Wheel from "@uiw/react-color-wheel";
import { Fragment, useEffect, useState } from "react";
//
import { toRgba, customStyle } from "./Acomponents";
import { useStoreState } from "@/hooks/useStore";
import { useCurrent } from "@/hooks/useCurrent";
//
import CustomInput from "./customInput";
//
const ColorPicker = () => {
  const { isColorPicker } = useStoreState();
  const { setColor } = useCurrent();
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  useEffect(() => {
    setColor(toRgba(hsva));
  }, [hsva]);
  return (
    <div className={cp.colorPickerContainer} style={customStyle(isColorPicker)}>
      <Fragment>
        <Wheel
          width={90}
          height={90}
          color={hsva}
          onChange={(color) => setHsva((e) => ({ ...e, ...color.hsva }))}
        />
      </Fragment>
      <div className={cp.inputRangeContainer}>
        <CustomInput color={hsva} setHsva={setHsva} />
        <div
          className={cp.currentColor}
          style={{ backgroundColor: toRgba(hsva) }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
