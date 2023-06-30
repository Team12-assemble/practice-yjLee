import CharCount from "./components/CharCount";
import Count from "./components/Count";
import CountReducer from "./components/CountReducer";
import CurrenTheme from "./components/CurrenTheme";
import Timer from "./components/Timer";
import ToggleTimer from "./components/ToggleTimer";

function App() {
  return (
    <CurrenTheme>
      <h1>Component lifecycle 이해</h1>
      <Count />
      <Timer />
      <CharCount />
      <ToggleTimer />
      <CountReducer />
    </CurrenTheme>
  );
}

export default App;
