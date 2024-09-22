import "./App.css";
import { TodoProvider } from "./context/TodoProvider";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import TodoProvider2, { TodoContext2 } from "./context/TodoProvider2";
import TodoForm2 from "./components/Todo/TodoForm2";
import TodoList2 from "./components/Todo/TodoList2";

function App() {
  return (
    <>
      <h1>Hi there</h1>
      <TodoProvider2>
        <TodoForm2></TodoForm2>
        <TodoList2></TodoList2>
      </TodoProvider2>
    </>
  );
}

export default App;
