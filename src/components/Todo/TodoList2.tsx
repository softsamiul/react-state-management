import React, { useContext } from "react";
import { TodoContext2, TTodo2 } from "../../context/TodoProvider2";

const TodoList2 = () => {
  const { state, dispatch } = useContext(TodoContext2);
  console.log(state);
  return (
    <>
      {state &&
        state.length > 0 &&
        state.map((item: TTodo2) => (
          <p
            key={item.id}
            onClick={(e) => dispatch({ type: "updateTodo", payload: item.id })}
            className={
              item.status === true ? "text-red-500 text-deleted" : "text-black"
            }
          >
            {item.title}
          </p>
        ))}
    </>
  );
};

export default TodoList2;
