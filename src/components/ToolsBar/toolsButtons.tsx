//
//
import { useCurrent } from "@/hooks/useCurrent";
import tb from "@/style/CanvasComponents/ToolsBar/toolsButtons.module.css";
//
//
//
//
type TButtonType = {
  icon: string;
  tool: string;
};
//
export const TButton = ({ icon, tool }: TButtonType) => {
  const { setTool } = useCurrent();
  return (
    <button className={tb.TButton} onClick={() => setTool(tool)}>
      <GetIcon icon={icon} />
    </button>
  );
};
//
//
//
//
const GetIcon = ({ icon }: { icon: string }) => {
  return <img className={tb.TButtonIcon} src={icon} alt="tool icon button" />;
};
//
//
