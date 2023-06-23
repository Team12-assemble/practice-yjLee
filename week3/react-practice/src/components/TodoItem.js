import React from "react";

const TodoItem = ({ todos }) => {
  return (
    <ul>
      {todos.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default TodoItem;
