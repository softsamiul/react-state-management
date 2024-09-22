import { createContext, ReactNode, useReducer } from "react";

export const TodoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);
interface TodoProviderProps {
  children: ReactNode;
}

export interface TTodo {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface TAction {
  type: string;
  payload: TTodo;
}

const initialState: TTodo[] = [];
const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];

    default:
      return currentState;
  }
};
export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const values = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
