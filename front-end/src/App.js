import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Grades from "./pages/Grades/Grades";
import AllProjects from "./pages/AllProjects/AllProjects";
import { projectLinksList } from "./data/projectLinksList";
function App() {
  const [user, setUser] = useState(false);
  const [projectLinks, setProjectLinks] = useState(projectLinksList);
  return (
    <div className="app">
      <Router>
        <Routes>
        
          {user ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/grades" element={<Grades projectLinks={projectLinks} />} />
              <Route path="/allprojects" element={<AllProjects />} />
            </>
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
