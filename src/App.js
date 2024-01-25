import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
