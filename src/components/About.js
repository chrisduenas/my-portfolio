import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import roles from '../data/roles.json';
import Dev from './About/Dev';


export default class About extends Component {
    constructor(props){
        super(props)
        this.handleDataCallback = this.handleDataCallback.bind(this)
    }
    handleDataCallback(txtMsg) {
        alert("hi")

    }
    
    render() {   

        return (
            <div className="ui container">
                <Segment className="ui stacked segment">
                    {roles.map((role, index) => {
                        return <Dev item={role}
                                    key={index}
                                    dataCallback={this.handleDataCallback} />
                    })}
                </Segment>
            </div>
        )
    }
}
