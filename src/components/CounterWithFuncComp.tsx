import ChildComp from "./ChildCountComp";

interface Counter {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterWithFuncComp = ({ count, setCount }: Counter) => {
  return (
    <div className="border border-purple-500 text-3xl font-bold p-5 m-5">
      <p>Mid level</p>
      <button onClick={() => setCount((count) => count + 1)}>
        click to Update = {count}
      </button>
      <ChildComp count={count} setCount={setCount} />
    </div>
  );
};

export default CounterWithFuncComp;
