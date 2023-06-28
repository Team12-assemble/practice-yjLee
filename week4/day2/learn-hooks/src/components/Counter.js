import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h3>카운트1</h3>
      <p>카운트: {count}</p>
      <button onClick={onClick}>증가</button>
    </div>
  );
};

export default Counter;
