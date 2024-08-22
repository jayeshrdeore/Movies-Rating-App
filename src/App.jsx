import "./Components/style.css";
import Home from "./Components/Home";
import MainMenu from "./Components/MainMenu";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mainmenu" element={<MainMenu />} />
    </Routes>
  );
}

export default App;
