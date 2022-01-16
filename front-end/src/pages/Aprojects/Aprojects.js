import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "../../static/style/grades.css";

import Navbar from "../../Components/Navbar"
import AllContainer from './AllContainer';

function Aprojects() {
    return (
        <html lang="en">
            <head>
                <title>All projects</title>
            </head>
            <body> 
                <Navbar></Navbar>
                <AllContainer></AllContainer>
            </body>
        </html>
        
    )
}

export default Aprojects
