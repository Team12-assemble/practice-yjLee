import React, { useReducer } from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text, edit: !todo.edit }
          : todo
      );
    case "TOGGLE_EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, edit: !todo.edit } : todo
      );
    default:
      return state;
  }
};

const TodoReducer = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      edit: false,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setInput("");
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <>
      <input
        id="todo"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할일을 입력하세요."
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem item={todo} dispatch={dispatch} />
        ))}
      </ul>
    </>
  );
};

export default TodoReducer;
