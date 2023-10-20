//
import tb from "@/style/CanvasComponents/ToolsBar/toolsButtons.module.css";
import cp from "@/style/CanvasComponents/ToolsBar/colorPickerButton.module.css";
//
import { useColorPicker } from "@/hooks/useColorPicker";
//
//
//
//
type ColorPickerType = { color: string };
//
const ColorPickerButton = ({ color }: ColorPickerType) => {
  const setColorPicker = useColorPicker();
  return (
    <div
      className={`${tb.TButton} ${tb.noBorder}`}
      onClick={() => setColorPicker(true)}
    >
      <div className={tb.colorPickerButton}>
        <div className={cp.mainColor} style={{ backgroundColor: color }} />
        <div className={cp.secondaryColor} />
      </div>
    </div>
  );
};

export default ColorPickerButton;
