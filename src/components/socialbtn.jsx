import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const socialBtn = (props) =>{
    return(
        <div>
            <ul className="socialnet">
                <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faGithub} /></li>
            </ul>
        </div>
    )
}

export default socialBtn;