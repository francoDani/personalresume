import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import PersonalInfo from './personalinfo';
import ContactInfo from './contactinfo';
import Message from './message';



const textArea = (props) => {
    return (

        <div className={"textarea " + props.view}>
            <Switch>
                <Route path="/sendMessage">
                    <Message view={ props.view }/>
                </Route>
                <Route path="/contactinfo">
                    <ContactInfo view={ props.view }/>
                </Route>
                <Route path="/">
                    <PersonalInfo view={ props.view }/>
                </Route>
            </Switch>
        </div>

    )
}

export default textArea;