import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "../../static/style/grades.css";

import Navbar from "../../Components/Navbar"
import GradesContainer from './GradesContainer';

function Grades() {
    return (
        <html lang="en">
            <head>    
                <title>Grades</title>
            </head>
            <body> 
                <Navbar></Navbar>
                <GradesContainer></GradesContainer>
            </body>
        </html>
        
    )
}


                    

export default Grades
