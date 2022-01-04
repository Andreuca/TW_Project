import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useState } from "react";
import Home from "./pages/Home/Home";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="app">
      <Router>
        <Routes>
          {user ? (
            <Route path="/" element={<Home />} />
          ) : (
            <>
              <Route path="/login" element={<Login setUser={setUser} />} />{" "}
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
