import ImgCard from './imgcard';
import NavigationVar from './navigationvar';
import TextArea from './textarea';
import ToggleColor from './togglecolor';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const card = (props) =>{
    return(
        <Router>
        <div className={ "card " + props.view}>
            <ToggleColor view= { props.view } changeview = { props.changeview }/>
            <NavigationVar view= { props.view }/>      
            <ImgCard view= { props.view }/>
            <TextArea view= { props.view }/>
        </div>
        </Router>
    )
}

export default card;