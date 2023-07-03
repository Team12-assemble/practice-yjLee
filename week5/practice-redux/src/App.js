import Auth from "./components/Auth";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Counter />
      <Auth />
      <Todos />
      <Cart />
    </div>
  );
}

export default App;
