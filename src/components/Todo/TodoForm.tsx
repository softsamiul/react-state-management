import { ChangeEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(TodoContext);
  const [task, setask] = useState("");
  console.log(state);
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo = {
      id: Date.now(),
      title: task,
      isCompleted: false,
    };

    dispatch({ type: "addTodo", payload: todo });
  };
  return (
    <div>
      <h1>Todo Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Task">Task</label> <br />
        <input
          type="text"
          name="task"
          placeholder="add task"
          className="border border-green-500"
          onBlur={(e) => setask(e.target.value)}
        />
        <button type="submit" className="button button-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
