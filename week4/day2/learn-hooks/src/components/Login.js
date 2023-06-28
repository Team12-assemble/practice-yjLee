import React from "react";
import useForm from "../hooks/useForm";

const Login = () => {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  const onLogin = (e) => {
    e.preventDefault();
    console.log("로그인", values);
    resetForm();
  };
  return (
    <div>
      <h3>로그인폼</h3>
      <form onSubmit={onLogin}>
        <div>
          <label htmlFor="email">이 메 일 : </label>
          <input
            id="email"
            value={values.email}
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호: </label>
          <input
            id="password"
            value={values.password}
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
