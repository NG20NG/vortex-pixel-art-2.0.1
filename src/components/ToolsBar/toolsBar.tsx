//
import t from "@/style/CanvasComponents/ToolsBar/toolsBar.module.css";

//

//
import { TButton } from "./toolsButtons";
//
import { toolBarIcons } from "@/constants/constants";
import ColorPickerButton from "./colorPickerButton";
import { useStoreState } from "@/hooks/useStore";

//
//
//
const ToolsBar = () => {
  const { currentColor } = useStoreState();
  const { pen, erazer } = toolBarIcons;
  return (
    <div className={t.toolBarContainer}>
      <TButton icon={pen.src} tool={"pen"} />
      <TButton icon={erazer.src} tool={"eraser"} />
      <ColorPickerButton color={currentColor} />
    </div>
  );
};

export default ToolsBar;
