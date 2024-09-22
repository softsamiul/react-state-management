import { ChangeEvent, useReducer } from "react";
const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

interface TAction {
  type: string;
  payload: string;
}

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobby":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };
    default:
      return currentState;
  }
};
const UserReducerInfo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        type="text"
        name="Name"
        placeholder="name"
        className="border border-purple-500 p-3"
      />
      <input
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        type="number"
        name="age"
        placeholder="age"
        className="border border-purple-500 p-3"
      />
      <input
        onBlur={(e) => dispatch({ type: "addHobby", payload: e.target.value })}
        type="text"
        name="hobbies"
        placeholder="hobbies"
        className="border border-purple-500 p-3"
      />
      <button
        type="submit"
        className="btn btn-primary border border-purple p-3 ml-2"
      >
        Submit
      </button>
    </form>
  );
};

export default UserReducerInfo;
