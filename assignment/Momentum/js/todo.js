const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todoArray = JSON.parse(localStorage.getItem("todoList"));
todoArray = todoArray ? todoArray : [];

const setStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoArray));
};

const onSubmitTodo = (e) => {
  e.preventDefault();
  const todoObj = {
    todo: todoInput.value,
    id: "id" + Date.now(),
  };
  todoInput.value = "";
  addTodoList(todoObj);
  todoArray.push(todoObj);
  setStorage();
  todoList.scrollTop = todoList.scrollHeight;
};

const onDeleteTodo = (todoId) => {
  const delete_li = document.querySelector(`li#${todoId}`);
  delete_li.remove();
  todoArray = todoArray.filter((todo) => todo.id !== todoId);
  console.log("삭제후", todoArray);

  setStorage();
};

const addTodoList = (todo) => {
  const list = document.createElement("li");
  list.innerText = todo.todo;
  list.id = todo.id;
  todoList.appendChild(list);

  const btn = document.createElement("button");
  btn.innerText = "삭제";
  btn.id = "delete-btn";
  list.appendChild(btn);

  btn.addEventListener("click", (e) => {
    const deleteId = e.target.parentElement.id;
    onDeleteTodo(deleteId);
  });
};

//submit event
todoForm.addEventListener("submit", onSubmitTodo);

todoArray.forEach((todo) => {
  console.log(todo);
  addTodoList(todo);
});
