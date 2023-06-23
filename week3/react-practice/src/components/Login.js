import React, { useState, useEffect } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  //isLoggedIn state를 추가해서 true,false로 validate 관리해줘도 된다.

  useEffect(() => {
    console.log(name, password);
  }, [name, password]);

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, password);
    if (name === "admin" && password === "password") {
      alert("로그인 성공!");
      setName("");
      setPassword("");
    } else {
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="사용자명"
          type="text"
          name="username"
          onChange={handleInputName}
          value={name}
        />
        <input
          placeholder="비밀번호"
          type="password"
          name="password"
          onChange={handlePassword}
          value={password}
        />
        <button type="submit">확인</button>
        {/* 작동 안되네 */}
        {/* <input type="button" onSubmit={onSubmit} value="확인" /> */}
      </form>
    </>
  );
};

export default Login;
