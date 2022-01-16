import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import SubmitBtn from '../../Components/SubmitBtn';
import TextInput from '../../Components/TextInput';
import PresentationVideo from '../../Components/PresentationVideo';

function GradesContainer(){
    return (
        <div className="grades-container">
            <div className="title" >
                <h1>GRADES</h1>
            </div>
            <div className="actions">
                {/* <SelectProject></SelectProject>   NU INTELEG CE E ?     */ }
                <PresentationVideo></PresentationVideo>
                <div className="grade-form">
                    <TextInput></TextInput>
                    <SubmitBtn></SubmitBtn>
                </div>  
            </div>
        </div>
    )
}

export default GradesContainer