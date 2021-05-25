import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const toggleColor = (props) =>{
    return(
        <div className={"togglecolor " + props.view}>
            <button onClick={ props.changeview }><FontAwesomeIcon icon={faSun}/></button>
        </div>
    )
}

export default toggleColor;