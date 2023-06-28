import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// 쿼리스트링 예제
const About = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`); //쿼리스트링 보내기
  };
  return (
    <div>
      <h1>Input</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={search}
          placeholder="여행가고 싶은 지역은?"
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
};

export default About;
