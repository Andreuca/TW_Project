import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

function DropdownProject() {
    return (
        <>
            <div className="btn-group">
            <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                select project
            </button>
            <div className="dropdown-menu">
                ...
            </div>
            </div>
        </>
    )
}

export default DropdownProject