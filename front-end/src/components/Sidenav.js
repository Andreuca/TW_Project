import "../static/style/grades.css";
import logo from "../static/images/nav_prod.svg"

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function Sidenav() {
    return (
        <>
            <div id="mySidenav" className="sidenav" >
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <a href="Login" id="btnSignIn">Sign in</a>
                <a href="#" id="btnSignOut" onclick="signOut()" data-bs-toggle="modal"
                    data-bs-target="#exampleModal2">Sign out</a>
                <a href="Mproject" id="btnAbout">My projects</a>
                <a href="Grades" id="btnAbout">Grades</a>
                <a href="Aprojects" id="btnAbout">All projects</a>
            </div>
            <img src={logo} id="hamburger" onClick={openNav}></img>
        </>
         
    )
}

export default Sidenav