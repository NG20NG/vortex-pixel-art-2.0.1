//
//
import b from "@/style/CanvasComponents/FunctionsBar/functionButton.module.css";
//
//
//
type FButtonType = { icon: string; onClick?: () => void };
//
const FButton = ({ icon, onClick }: FButtonType) => {
  return (
    <div className={b.FButton} onClick={onClick}>
      <img className={b.FButtonIcons} src={icon} alt="function abr icons" />
    </div>
  );
};

export { FButton };
