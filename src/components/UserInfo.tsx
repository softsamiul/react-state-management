import { useState } from "react";

interface User {
  name: string;
  age: number;
  hobbies: [];
}

const UserInfo = () => {
  const [user, setUser] = useState({ name: "", age: 0, hobbies: [] });

  console.log(user);
  return (
    <form action="">
      <input
        type="text"
        name="Name"
        placeholder="name"
        className="border border-purple-500 p-3"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        className="border border-purple-500 p-3"
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <input
        type="text"
        name="hobbies"
        placeholder="hobbies"
        className="border border-purple-500 p-3"
        onChange={(e) => setUser({ ...user, hobbies: [e.target.value] })}
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

export default UserInfo;
