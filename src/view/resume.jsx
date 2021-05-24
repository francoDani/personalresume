import React from 'react';
import Card from '../components/card'

class resume extends React.Component {
    constructor(){
        super();
        this.state={
            page:"personalInfo",
            view:"dark",

        }
        const changeView = (event) =>{

        }

        const changePage = (event) =>{

        }
    }
    render(){
        return(
            <div className="resume">
                <Card />
            </div>
        )
    }
}

export default resume;