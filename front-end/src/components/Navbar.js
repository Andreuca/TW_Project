import "../static/style/grades.css";
import Sidenav from "../components/Sidenav"

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-light bg-light justify-content-between sticky-top col-xs-12" id="navbar">
                <div className="nav-left"> 
                    <a id="home-text" className="nav-item" href="Grades">Home</a>
                </div>
                <div className="nav-right">
                    <Sidenav></Sidenav> 
                </div>
        </nav>
        </>
    )
}

export default Navbar