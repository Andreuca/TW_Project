import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "../../static/style/grades.css";

import Navbar from "../../components/Navbar"
import ProjectContainer from './ProjectContainer';

function Mproject() {
    return (
        <html lang="en">
            <head>
                <title>My project</title>
            </head>
            <body> 
                <Navbar></Navbar>
                <ProjectContainer></ProjectContainer>
            </body>
        </html>
        
    )
}

export default Mproject
