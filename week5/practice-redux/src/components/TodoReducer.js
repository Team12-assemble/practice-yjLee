// todo 리듀서 구현 연습
import React, { useReducer } from "react";
import { useState } from "react";

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
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
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setInput("");
  };
  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <>
      <h1>할일 목록</h1>
      <label htmlFor="todo">할 일 : </label>
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
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoReducer;
