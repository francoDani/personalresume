import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const socialBtn = (props) =>{
    return(
        <div>
            <ul className="socialnet">
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
            </ul>
        </div>
    )
}

export default socialBtn;