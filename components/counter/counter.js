import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleOnDecrementClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>This is the counter: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          handleOnDecrementClick();
        }}
      >
        Decrease
      </button>
    </div>
  );
};
export default Counter;
