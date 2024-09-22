import React, { useContext } from "react";
import { TodoContext, TTodo } from "../../context/TodoProvider";

const TodoList = () => {
  const { state } = useContext(TodoContext);
  console.log("todoList", state);
  return (
    <div>
      {state.map((item: TTodo) => {
        return (
          <ul key={item.id}>
            <li>{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default TodoList;
