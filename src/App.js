import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Sign_Up from "./Components/Sign_up";
import Sign_UpNumber from "./Components/Sign_UpNumber";
import Sign_UpPassword from "./Components/Sign_UpPassword";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Sign_Up" element={<Sign_Up />} />
        <Route path="/Sign_UpNumber" element={<Sign_UpNumber />} />
        <Route path="/Sign_UpPassword" element={<Sign_UpPassword />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
