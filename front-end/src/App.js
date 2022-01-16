import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useState } from "react";
import Grades from "./pages/Grades/Grades";
import Mproject from "./pages/Mproject/Mproject";
import Aprojects from "./pages/Aprojects/Aprojects";


function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="app">
      <Router>
        <Routes>
          {user ? (
            <Route path="/" element={<Grades />} />
          ) : (
            <>
              <Route path="/" element={<Login setUser={setUser} />} />{" "}
              <Route path="/register" element={<Register />} />
              <Route path="/Grades" element={<Grades />} />
              <Route path="/Mproject" element={<Mproject />} />
              <Route path="/Aprojects" element={<Aprojects />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
