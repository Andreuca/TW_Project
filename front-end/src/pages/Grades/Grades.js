import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./Grades.css";

const Grades = ({ projectLinks }) => {
  const [data, setData] = useState(null);
  function getData(val) {
    setData(val.target.value);
    console.warn(val.target.value);
  }
  const [selectedProjectLink, setSelectedProjectLink] = useState(
    projectLinks[0].link
  );
  const handleSelect = (e) => {
    const selectedProject = projectLinks.find(
      (project) => project.id === +e.target.value
    );
    console.log(selectedProject);
    setSelectedProjectLink(selectedProject.link);
  };
  return (
    <div className="grades">
      <Navbar />
      <h1>Grading the projects</h1>
      <div className="grades-content">
        {" "}
        <select onChange={handleSelect} className="grades-select">
          {projectLinks.map((project) => (
            <option key={project.id} value={project.id}>
              {project.text}
            </option>
          ))}
        </select>
        <div className="grades-text">
          <h2>Link: {selectedProjectLink} </h2>
        </div>
        <form className="grades-form">
          <div className="grades-form-control">
            <input type="text" className="grades-input" onChange={getData} />
          </div>
          <button type="submit" value="submit" className="grades-btn">
            Evaluate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Grades;
