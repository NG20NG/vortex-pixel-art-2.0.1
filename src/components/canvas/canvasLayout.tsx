//
import c from "@/style/CanvasComponents/Canvas/canvas.module.css";
import { useColorPicker } from "@/hooks/useColorPicker";
import Grid from "../canvasGrid/grid";
import { RefObject, forwardRef } from "react";
//
type A = {
  canvasRef: RefObject<HTMLCanvasElement>;
  scrollRef: RefObject<HTMLDivElement>;
};
const Canvas = ({ canvasRef, scrollRef }: A, _ref: any) => {
  const setColorPicker = useColorPicker();
  return (
    <div
      className={c.canvas}
      onClick={() => {
        setColorPicker(false);
        console.log(123);
      }}
    >
      <div className={c.field} ref={scrollRef}>
        <div className={c.contentContainer}>
          <Grid />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Canvas);
