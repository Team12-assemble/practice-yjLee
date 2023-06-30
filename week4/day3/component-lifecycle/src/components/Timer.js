import React, { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      // 시작과 동시에 clear (unmount)
      // + 수행 끝날때 리턴
      console.log("리턴되었습니다.");
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <p>타이머(초) : {seconds}</p>
    </>
  );
};

export default Timer;
