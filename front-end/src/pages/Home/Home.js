import React from "react";
import Navbar from "../../components/Navbar";
import DropZone from "../../components/Dropzone/Dropzone";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="home-content">
        <h1>My Project</h1>
        <DropZone />
        <form className="home-form">
          <h2 className="home-form-title">Link-ul proiectului </h2>

          <input type="text" className="home-input" />

          <button type="submit" value="submit" className="home-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
