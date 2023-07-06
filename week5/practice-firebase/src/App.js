import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./routes/Auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth isLoggedIn={isLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
