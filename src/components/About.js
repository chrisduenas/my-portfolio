import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import projects from '../data/projects.json';


export default class About extends Component {

    render() {  
        const rolePlay = () => {
            return projects.roleBios.map((role, index) => {
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