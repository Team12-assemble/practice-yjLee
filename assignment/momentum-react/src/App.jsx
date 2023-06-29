import Clock from "./components/Clock";
import Greeting from "./components/Greeting";
import Background from "./pages/Main/Background";

function App() {
  return (
    <>
      <Background>
        <Clock />
        <Greeting />
      </Background>
    </>
  );
}

export default App;
