import React, { ChangeEvent, useContext, useState } from "react";
import { TodoContext2 } from "../../context/TodoProvider2";

const TodoForm2 = () => {
  const { state, dispatch } = useContext(TodoContext2);
  const [task, setTask] = useState("");
  const hadnleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      title: task,
      status: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };
  return (
    <div>
      <form onSubmit={hadnleSubmit}>
        <label htmlFor="#">Add Todo</label> <br />
        <input
          type="text"
          name="title"
          placeholder="Add todo"
          className="border border-purple-500 p-2"
          onBlur={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary border border-purple-500 ms-3 p-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm2;
