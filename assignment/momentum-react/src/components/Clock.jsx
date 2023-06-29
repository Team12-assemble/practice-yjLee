import { useState, useEffect } from "react";
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;
