import { useState } from "react";
import NameInput from "./NameInput";
import Todo from "./TodoReducer";
import "./styles.css";

const Hello = ({ username }) => {
  return (
    <h1 id="greeting" className={!username ? "hidden" : "greeting"}>
      Hello, {username}!
    </h1>
  );
};

const Greeting = () => {
  const [username, setName] = useState(localStorage.getItem("username"));
  return (
    <div>
      <NameInput username={username} setName={setName} />
      <Hello username={username} />
      <Todo username={username} />
    </div>
  );
};

export default Greeting;
