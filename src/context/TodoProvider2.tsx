import { createContext, ReactNode, useReducer } from "react";

export const TodoContext2 = createContext<
  { state: TTodo2[]; dispatch: React.Dispatch<TAction2> } | undefined
>(undefined);

export interface TTodo2 {
  id: number;
  title: string;
  status: boolean;
}
interface TAction2 {
  type: "addTodo" | "updateTodo";
  payload: TTodo2 | number;
}
interface TodoProviderProps2 {
  children: ReactNode;
}

const initialState2: TTodo2[] = [];

const reducer2 = (currentState: TTodo2[], action: TAction2) => {
  switch (action.type) {
    case "addTodo":
      return [...currentState, action.payload];
    case "updateTodo":
      return currentState.map((item) =>
        item.id === action.payload ? { ...item, status: !item.status } : item
      );
    default:
      return currentState;
  }
};

const TodoProvider2 = ({ children }: TodoProviderProps2) => {
  const [state, dispatch] = useReducer(reducer2, initialState2);

  const values = {
    state,
    dispatch,
  };
  return (
    <TodoContext2.Provider value={values}>{children}</TodoContext2.Provider>
  );
};

export default TodoProvider2;
