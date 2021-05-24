import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faSun, faUser } from '@fortawesome/free-solid-svg-icons'

const toggleColor = (props) =>{
    return(
        <div className={"togglecolor " + props.view}>
            <button onClick={ props.changeview }><FontAwesomeIcon icon={faSun}/></button>
        </div>
    )
}

export default toggleColor;