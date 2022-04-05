import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
};

const CustomCounter = ({ initialValue = 0, stepper = 1 }) => {
  const [count, setCount] = React.useState(initialValue);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + stepper)}>increment</button>
      <button onClick={() => setCount(count - stepper)}>decrement</button>
    </div>
  );
};

export { Counter, CustomCounter };

export default Counter;
