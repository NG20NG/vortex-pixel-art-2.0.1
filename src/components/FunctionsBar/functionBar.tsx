import f from "@/style/CanvasComponents/FunctionsBar/functionsBar.module.css";
import { FButton } from "./functionButton";
import { functionBarIcons } from "@/constants/constants";
import { useIsGridOn } from "@/hooks/useIsOn";

const FunctionBar = () => {
  const { grid, miniMap, save, screen } = functionBarIcons;
  const setIsGridOn = useIsGridOn();

  return (
    <div className={f.functionBarContainer}>
      <div className={f.functionBar}>
        <FButton icon={grid.src} onClick={() => setIsGridOn()} />
        <FButton icon={miniMap.src} />
        <FButton icon={save.src} />
        <FButton icon={screen.src} />
        <div className={f.switchFunctionBar} />
      </div>
    </div>
  );
};

export default FunctionBar;
