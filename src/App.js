import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  // const numbers = [1, 2, 3, 4, 5];
  // const doubled = numbers.map((number) => <li>{number}</li>);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/profiles/:username" element={<Profile />} />
    </Routes>
  );
}

export default App;
