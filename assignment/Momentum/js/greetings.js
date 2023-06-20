const loginForm = document.querySelector("#login-form");
const nameInput = document.querySelector("#input-name");
const greeting = document.querySelector("#greeting");

const login = (e) => {
  e.preventDefault();
  console.log("login!");
  loginForm.classList.add("hidden");
  const username = nameInput.value;
  localStorage.setItem("username", username);
};
const showGreeting = (username) => {
  greeting.innerText = `Hello, ${username}!`;
  greeting.classList.remove("hidden");
};

const getUsername = localStorage.getItem("username");

if (!getUsername) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", login);
} else {
  showGreeting(getUsername);
}
