import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, doneTodo } from "../redux/todosSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosStore);

  const [todoInput, setTodoInput] = useState("");

  const activeEnter = (e) => {
    if (e.key === "Enter") handleAddTodo();
  };

  const handleAddTodo = () => {
    if (todoInput.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: todoInput,
      done: false,
    };
    dispatch(addTodo({ newTodo }));
    setTodoInput("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleTodoDone = (id, done) => {
    dispatch(doneTodo({ id, done }));
  };

  return (
    <div>
      <h2>Todo-List</h2>
      <label htmlFor="todo">할 일 : </label>
      <input
        id="todo"
        placeholder="할일을 입력하세요."
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={handleAddTodo}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => handleTodoDone(todo.id, todo.done)}
              style={{
                textDecoration: todo.done && "line-through",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
