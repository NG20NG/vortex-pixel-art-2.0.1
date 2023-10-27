//
//
//
//
//
//
//
//
import c from "@/style/CanvasComponents/Canvas/canvas.module.css";
import { useStoreGrid } from "@/hooks/useStore";
import { RefObject, useEffect } from "react";
//
type CanvasType = { canvasRef: RefObject<HTMLCanvasElement> };
//
const Canvas = ({ canvasRef }: CanvasType) => {
  const { canvasSize, gridSize } = useStoreGrid();
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = "red";
    ctx.fillRect(3, 3, 1, 1);
  }, []);
  return (
    <canvas
      className={c.canvas}
      style={{
        width: `${gridSize}px`,
        height: `${gridSize}px`,
      }}
      ref={canvasRef}
      width={canvasSize}
      height={canvasSize}
    />
  );
};

export default Canvas;
