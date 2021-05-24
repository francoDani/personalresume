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

        <div className="textarea">
            <Switch>
                <Route path="/sendMessage">
                    <Message />
                </Route>
                <Route path="/contactinfo">
                    <ContactInfo />
                </Route>
                <Route path="/">
                    <PersonalInfo />
                </Route>
            </Switch>
        </div>

    )
}

export default textArea;