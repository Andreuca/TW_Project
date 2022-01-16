import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "../../static/style/grades.css";


import GradesContainer from "./GradesContainer"
import Navbar from '../../components/Navbar';

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
