import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const contactInfo = (props) => {
    return (
        <div className={"contact " + props.view}>
            <h1>Contact Info</h1>
            <h4><span><FontAwesomeIcon icon={faPhone}/></span> Teléfono</h4>
            <h5>3816-534-171</h5>
            <h4><span><FontAwesomeIcon icon={faMailBulk}/></span> E-mail</h4>
            <h5>franco.danielsen@gmail.com</h5>
            <h4><span><FontAwesomeIcon icon={faLinkedinIn}/></span> Linkedin</h4>
            <h5> linkedin.com/in/francodanielsen</h5>
            <h4><span><FontAwesomeIcon icon={faMapMarkedAlt}/></span> Dirección</h4>
            <h5>Juan Jose Paso 752, San Miguel de Tucumán</h5>

        </div>
    )
}

export default contactInfo;