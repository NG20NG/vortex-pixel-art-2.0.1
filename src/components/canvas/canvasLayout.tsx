//
import c from "@/style/CanvasComponents/Canvas/canvasLayout.module.css";
import { useColorPicker } from "@/hooks/useIsOn";
import Grid from "../canvasGrid/grid";
import { RefObject, forwardRef } from "react";
import Canvas from "./canvas";
//
type A = {
  canvasRef: RefObject<HTMLCanvasElement>;
  scrollRef: RefObject<HTMLDivElement>;
};
const CanvasLayout = ({ canvasRef, scrollRef }: A, _ref: any) => {
  const setColorPicker = useColorPicker();
  return (
    <div className={c.canvasLayout} onClick={() => setColorPicker(false)}>
      <div className={c.field} ref={scrollRef}>
        <div className={c.contentContainer}>
          <Canvas canvasRef={canvasRef} />
          <Grid />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(CanvasLayout);
