import { Route, Routes } from "react-router";
import "./assets/main.css";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
