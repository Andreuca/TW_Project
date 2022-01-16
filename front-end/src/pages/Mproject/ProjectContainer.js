import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import SubmitBtn from '../../Components/SubmitBtn';
import TextInput from '../../Components/TextInput';

function ProjectContainer(){
    return (
        <div className="grades-container">
            <div className="title" >
                <h1>MY PROJECT</h1>
            </div>
            <div className="actions">
                {/* <UploadVideo></UploadVideo>  NU STIU CE E ?  */}
                <h2>Link catre proiect</h2>
                <div className="project-form">
                    <TextInput></TextInput>
                    <SubmitBtn></SubmitBtn>
                </div>
            </div> 
        </div>
    )
}

export default ProjectContainer