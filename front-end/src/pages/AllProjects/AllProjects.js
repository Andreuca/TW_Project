import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./AllProjects.css";
const AllProjects = () => {
  const [selects, setSelects] = useState();
  return (
    <div className="allprojects">
      <Navbar />
      
        <h1>All the graded projects</h1>
        <div className="allprojects-content">
        {/* /Aici ar trebuii sa ma prind cum sa fac ca atunci cand dau pe proiect sa imi ia nota specifica proiectului */}
        <select
          value={selects}
          onChange={(e) => setSelects(e.target.value)}
          className="allprojects-select"
        >
          <option>Project 1</option>
          <option>Project 2</option>
          <option>Project 3</option>
          <option>Project 4</option>
          <option>Project 5</option>
        </select>
        <div className="allprojects-text">
          <h1>Grade: </h1>
          <h1>{selects}</h1>
        </div>
      </div>
   </div>
  );
};

export default AllProjects;
