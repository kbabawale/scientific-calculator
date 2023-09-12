import { Dispatch, createContext, useReducer, useState } from "react";

interface AppProp {
  children?: React.ReactNode;
}

// SHIFT KEY
export const ShiftKeyContext = createContext<{
  shiftKeyState: boolean;
  dispatch?: Dispatch<ShiftKeyActionType>;
}>({ shiftKeyState: false });

// DISPLAY BOARD
export const DisplayBoardContext = createContext<{
  displayBoardState: string;
  dispatch?: Dispatch<string>;
}>({ displayBoardState: "0" });

const initialShiftKeyState: boolean = false;

type ShiftKeyActionType = { type: "ON" } | { type: "OFF" };

function ShiftKeyReducer(
  state: typeof initialShiftKeyState,
  action: ShiftKeyActionType
) {
  switch (action.type) {
    case "ON": {
      return true;
    }
    case "OFF":
    default: {
      return false;
    }
  }
}

export function CalculatorStoreProvider({ children }: AppProp) {
  const [shiftKeyState, dispatchShiftKey] = useReducer(
    ShiftKeyReducer,
    initialShiftKeyState
  );
  const [displayBoard, setDisplayBoard] = useState<string>("0");

  return (
    <ShiftKeyContext.Provider
      value={{ shiftKeyState, dispatch: dispatchShiftKey }}
    >
      <DisplayBoardContext.Provider
        value={{ displayBoardState: displayBoard, dispatch: setDisplayBoard }}
      >
        {children}
      </DisplayBoardContext.Provider>
    </ShiftKeyContext.Provider>
  );
}
