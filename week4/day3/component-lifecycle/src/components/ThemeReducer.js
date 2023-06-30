// CurrentTheme useReducer 사용시 코드

import React from "react";
import { useReducer } from "react";

const initialState = {
  theme: "light",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};
const ThemeReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Current Theme(리듀서사용): {state.theme}</p>
      <button
        onClick={() => {
          dispatch({ type: "TOGGLE_THEME" });
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeReducer;
