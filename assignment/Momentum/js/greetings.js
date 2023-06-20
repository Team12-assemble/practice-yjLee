const loginForm = document.querySelector("#login-form");
const nameInput = document.querySelector("#input-name");
const greeting = document.querySelector("#greeting");

const showGreeting = (username) => {
  greeting.innerText = `Hello, ${username}!`;
  greeting.classList.remove("hidden");
};
const showClock = () => {
  clock.classList.remove("hidden");
};

const login = (e) => {
  e.preventDefault();
  console.log("login!");
  loginForm.classList.add("hidden");
  const username = nameInput.value;
  localStorage.setItem("username", username);
  showClock();
  showGreeting(username);
};

const getUsername = localStorage.getItem("username");

if (!getUsername) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", login);
} else {
  showClock();
  showGreeting(getUsername);
}
