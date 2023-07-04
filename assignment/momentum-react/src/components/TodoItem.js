import React from "react";
import { useState } from "react";

//item{id, text, edit}
const TodoItem = ({ item, dispatch }) => {
  const [editInput, setEditInput] = useState("");

  const toggleEdit = (item) => {
    dispatch({ type: "TOGGLE_EDIT", payload: item });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  const editTodo = (id, editInput, edit) => {
    dispatch({
      type: "EDIT_TODO",
      payload: { id, text: editInput, edit },
    });
  };

  return (
    <div>
      <li key={item.id} className="todo-item">
        {item.edit ? (
          <>
            <input
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
            />
            <button onClick={() => editTodo(item.id, editInput, item.edit)}>
              확인
            </button>
            <button onClick={() => toggleEdit(item)}>취소</button>
          </>
        ) : (
          <>
            <span>{item.text}</span>
            <button
              onClick={() => {
                setEditInput(item.text);
                toggleEdit(item);
              }}
            >
              수정
            </button>
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
          </>
        )}
      </li>
    </div>
  );
};

export default TodoItem;
