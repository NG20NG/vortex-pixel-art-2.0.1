//
//
//
//
//
//
//
import ToolsBar from "@/components/ToolsBar/toolsBar";
import ColorPicker from "@/components/colorPicker/colorPickerContainer";
import CanvasLayout from "@/components/canvas/canvasLayout";
//
import { useEffect, useRef } from "react";
import FunctionBar from "./FunctionsBar/functionBar";

const Index = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  //
  useEffect(() => {
    const p = scrollRef.current?.parentElement!;
    p.scrollLeft = (p.scrollWidth - p.clientWidth) / 2;
    p.scrollTop = (p.scrollHeight - p.clientHeight) / 2;
  }, [scrollRef]);
  return (
    <>
      <CanvasLayout canvasRef={ref} scrollRef={scrollRef} />
      <FunctionBar />
      <ColorPicker />
      <ToolsBar />
    </>
  );
};

export default Index;
