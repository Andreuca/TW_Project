import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Grades from "./pages/Grades/Grades";
import AllProjects from "./pages/AllProjects/AllProjects";


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
              <Route path="/grades" element={<Grades />} />
              <Route path="/allprojects" element={<AllProjects />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
