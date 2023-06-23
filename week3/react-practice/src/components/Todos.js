import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";

//todo 추가기능만 만들어보기
const Todos = () => {
  const nextId = useRef(1);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: nextId.current,
    text: "",
  });

  // const [todo,setTodo] = useState('');
  const onChangeTodo = (e) => {
    setTodo({ id: nextId.current, text: e.target.value });
  };
  const onClick = () => {
    if (!todo.text) {
      alert("할일을 입력해주세요!");
      return;
    }
    // console.log(todos, todo);
    nextId.current++;
    setTodos([...todos, todo]);
    // console.log(todos, todo);
    setTodo({ ...todo, text: "" });
  };
  return (
    <>
      <input
        placeholder="할일을 입력하세요."
        type="text"
        value={todo.text}
        name="todo"
        onChange={onChangeTodo}
      />
      <button onClick={onClick}>추가</button>
      <TodoItem todos={todos} />
    </>
  );
};

export default Todos;
