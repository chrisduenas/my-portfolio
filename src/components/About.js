import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import roles from '../data/roles.json';


export default class About extends Component {

    render() {  
        const rolePlay = () => {
            return roles.roleBios.map((role, index) => {
                return <Segment
                        key={index}
                        onClick={this.toggleRole}>
                        <h5>{role.title}</h5>
                        <p>{role.description}</p>
                        </Segment>
            })
          
    };
        return(
            <div className="ui container">
                <Segment className="ui stacked segment" 
                        onClick={this.toggleRole}>
                         { rolePlay() }
                </Segment>
            </div>
        )
    }
}