import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginToggle } from "../redux/authSlice";

const Auth = () => {
  const isLogin = useSelector((state) => state.authStore);
  const dispatch = useDispatch();

  const dispatchToggle = () => {
    dispatch(loginToggle());
  };
  return (
    <div>
      <h2>로그인 Toggle</h2>
      {isLogin ? (
        <>
          <p>로그인 상태입니다.</p>
          <button onClick={dispatchToggle}>로그아웃</button>
        </>
      ) : (
        <>
          <p>로그인되지 않았습니다.</p>
          <button onClick={dispatchToggle}>로그인</button>
        </>
      )}
    </div>
  );
};

export default Auth;
