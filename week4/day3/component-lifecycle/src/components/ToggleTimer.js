import React, { useEffect, useState } from "react";
import "./styles.css";
import Timer from "./Timer";

const ToggleTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const onToggle = () => {
    // setSeconds(0);
    setShow(!show);
  };

  return (
    <div>
      {/* 아래는 언마운트 안됨(렌더링이 다시 일어나지 않음) */}
      <p className={!show ? "hidden" : "timer"}>타이머(초) : {seconds}</p>

      {/* 아래는 언마운트(리턴) 실행됨 (다시 렌더링) */}
      {show && <Timer />}

      <button onClick={onToggle}>{show ? "Hide Button" : "Show Button"}</button>
    </div>
  );
};

export default ToggleTimer;
