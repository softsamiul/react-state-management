import React from "react"; // Ensure React is imported for JSX support

class CounterWithClass extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

  render() {
    console.log(this);
    const { count } = this.state;
    return (
      <button onClick={() => this.setState({ count: count + 1 })}>
        {count}
      </button>
    );
  }
}

export default CounterWithClass;
