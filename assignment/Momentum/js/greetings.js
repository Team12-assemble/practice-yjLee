const loginForm = document.querySelector("#login-form");
const nameInput = document.querySelector("#input-name");
const greeting = document.querySelector("#greeting");

console.log(todoForm);
const showGreeting = (username) => {
  greeting.innerText = `Hello, ${username}!`;
  greeting.classList.remove("hidden");
};
const showClock = () => {
  clock.classList.remove("hidden");
};
const showTodo = () => {
  console.log("show", todoForm);
  todoForm.classList.remove("hidden");
  todoList.classList.remove("hidden");
};

const login = (e) => {
  e.preventDefault();
  console.log("login!");
  loginForm.classList.add("hidden");
  const username = nameInput.value;
  localStorage.setItem("username", username);
  showClock();
  showGreeting(username);
  showTodo();
};

const getUsername = localStorage.getItem("username");

if (!getUsername) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", login);
} else {
  showClock();
  showGreeting(getUsername);
  showTodo();
}
