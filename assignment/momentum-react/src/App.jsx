import Clock from "./components/Clock";
import Greeting from "./components/Greeting";
import Background from "./pages/Main/Background";
import TodoReducer from "./components/TodoReducer";

function App() {
  return (
    <>
      <Background>
        <Clock />
        <Greeting />
        <TodoReducer />
      </Background>
    </>
  );
}

export default App;
