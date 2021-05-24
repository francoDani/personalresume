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
        <div className="card">
            <ToggleColor />
            <NavigationVar />      
            <ImgCard />
            <TextArea />
        </div>
        </Router>
    )
}

export default card;