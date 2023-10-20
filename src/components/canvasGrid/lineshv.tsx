//
//
//
//
import g from "@/style/CanvasComponents/CanvasGrid/grid.module.css";
//
type L = { lines: number[]; gridSize: number; canvasSize: number };
//
export const HorizontalLines = ({ lines, gridSize, canvasSize }: L) => {
  return (
    <div className={g.horizontalLinesContainer}>
      {lines.map((e) => {
        return (
          <div
            key={e}
            style={{
              width: gridSize / canvasSize,
              borderRight: "1px solid #5656567f",
            }}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};
//
//
//
//
export const VerticalLines = ({ lines, gridSize, canvasSize }: L) => {
  return (
    <div className={g.verticalLinesContainer}>
      {lines.map((e) => {
        return (
          <div
            key={e}
            style={{
              height: gridSize / canvasSize,
              borderBottom: "1px solid #5656567f",
            }}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};
