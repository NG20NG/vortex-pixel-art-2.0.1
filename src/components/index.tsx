//
//
//
//
//
//
//
import ToolsBar from "@/components/ToolsBar/toolsBar";
import ColorPicker from "@/components/colorPicker/colorPickerContainer";
import Canvas from "@/components/canvas/canvasLayout";
//
import { useEffect, useRef } from "react";

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
      <Canvas canvasRef={ref} scrollRef={scrollRef} />
      <ColorPicker />
      <ToolsBar />
    </>
  );
};

export default Index;
