import React from "react";
import useCounter from "../hooks/useCounter";

const CustomCounter = () => {
  const { count, increment } = useCounter(0);
  return (
    <div>
      <h3>카운트2</h3>
      <p>카운트(커스텀):{count}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
};

export default CustomCounter;
