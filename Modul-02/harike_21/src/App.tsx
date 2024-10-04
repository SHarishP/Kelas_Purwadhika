import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import NavBar from "./components/NavBar";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <div className="m-0 p-0 no-underline scroll-smooth">
        <NavBar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
