import React, { useState } from "react";

const Count = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p>값 : {counter}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default Count;
