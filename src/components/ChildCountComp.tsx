interface Counter {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ChildComp = ({ count, setCount }: Counter) => {
  return (
    <div className="border border-green-500 text-3xl font-bold p-5 m-5">
      <p>Child</p>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
};

export default ChildComp;
