export interface StateActionType {
  type: string;
  isRightToolBar: boolean;
  isMouseDownUp: boolean;
  isColorPicker: boolean;
  isCursorOn: boolean;
  isGridOn: boolean;
  //========================
  currentLine: 1 | 2 | 3;
  currentColor: string;
  currentTool: string;
  topTools: string[];
  tools: string[];
  //========================
}
export interface StateType {
  isRightToolBar: boolean;
  isMouseDownUp: boolean;
  isColorPicker: boolean;
  isCursorOn: boolean;
  isGridOn: boolean;
  //========================
  currentLine: 1 | 2 | 3;
  currentColor: string;
  currentTool: string;
  topTools: string[];
  tools: string[];
  //========================
}
