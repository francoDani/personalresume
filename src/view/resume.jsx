import React from 'react';
import Card from '../components/card'

class resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "dark",

        }

        

        const changePage = (event) => {

        }

    }
     changeView = () => {
        if (this.state.view == "light") {
            this.setState({ view: "dark" })
        } else { this.setState({ view: "light" }) }
        console.log(this.state.view)
    }
    render() {
        return (
            <div className="resume">
                <Card view={this.state.view}
                    changeview={ this.changeView } />
            </div>
        )
    }
}

export default resume;