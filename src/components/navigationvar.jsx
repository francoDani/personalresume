import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const navigationVar = (props) => {
    return (
            <div className="navigationvar">
                <ul>
                    <Link to="/"><li><button><FontAwesomeIcon icon={faUser} /></button></li></Link>
                    <Link to="/contactinfo"><li><button><FontAwesomeIcon icon={faPhone} /></button></li></Link>
                    <Link to="/sendMessage"><li><button><FontAwesomeIcon icon={faEnvelope} /></button></li></Link>
                </ul>
            </div>
    )
}

export default navigationVar;