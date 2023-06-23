import Login from "./components/Login";
import Todos from "./components/Todos";
import RandNum from "./components/RandNum";
import ImgSlider from "./components/ImgSlider";

function App() {
  return (
    <div className="App">
      <h1>리액트 실습</h1>
      <Login />
      <Todos />
      <RandNum min={1} max={100} />
      <ImgSlider />
    </div>
  );
}

export default App;
