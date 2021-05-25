import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const socialBtn = (props) =>{
    return(
        <div>
            <ul className="socialnet">
                <li> <a href="https://linkedin.com/in/francodanielsen"><FontAwesomeIcon icon={faLinkedinIn} /></a> </li>
                <li><a href="https://instagram.com/francodanielsen"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://github.com/francoDani"><FontAwesomeIcon icon={faGithub} /></a></li>
                
            </ul>
        </div>
    )
}

export default socialBtn;