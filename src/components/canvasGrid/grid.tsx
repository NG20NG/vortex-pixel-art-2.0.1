import { useStoreGrid, useStoreState } from "@/hooks/useStore";
import g from "@/style/CanvasComponents/CanvasGrid/grid.module.css";
import { HorizontalLines, VerticalLines } from "./lineshv";

const Grid = () => {
  const { canvasSize, gridSize } = useStoreGrid();
  const { isGridOn } = useStoreState();
  let lines = [];
  for (let i = 1; i < canvasSize; i++) lines.push(i);

  return (
    <>
      {isGridOn && (
        <div
          className={g.grid}
          style={{
            width: gridSize,
            height: gridSize,
          }}
        >
          <HorizontalLines
            lines={lines}
            canvasSize={canvasSize}
            gridSize={gridSize}
          />
          <VerticalLines
            lines={lines}
            canvasSize={canvasSize}
            gridSize={gridSize}
          />
        </div>
      )}
    </>
  );
};

export default Grid;
