import React, { useEffect, useState } from "react";

const CharCount = () => {
  const [length, setLength] = useState(0);
  const [char, setChar] = useState("");

  useEffect(() => {
    setLength(char.length);
  }, [char]);

  const onChange = (e) => {
    const text = e.target.value;
    setChar(text);
    // setLength(char.length); // 바로 반영 안됨. => useEffect 사용
    // setLength(text.length); // 이렇게 해도 되지만 useEffect로 처리해보기
  };

  return (
    <div>
      <textarea value={char} onChange={onChange} />
      <p>Character Count: {length}</p>
    </div>
  );
};

export default CharCount;
