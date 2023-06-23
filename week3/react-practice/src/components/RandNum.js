import React from "react";

const RandNum = ({ min, max }) => {
  const random = () => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  };
  return <>랜덤 숫자 : {random()}</>;
};

export default RandNum;
