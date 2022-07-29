import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Counter from "./pages/Counter/Counter";
import Reducer from "./pages/Reducer/Reducer";
import UserList from "./pages/Reducer/UserList";
import Tab from "./pages/Main/Tab";

function App() {
  // const numbers = [1, 2, 3, 4, 5];
  // const doubled = numbers.map((number) => <li>{number}</li>);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/profiles/:username" element={<Profile />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/reducer" element={<Reducer />} />
      <Route path="/userlist" element={<UserList />} />
      <Route path="/tab" element={<Tab />} />
    </Routes>
  );
}

export default App;
