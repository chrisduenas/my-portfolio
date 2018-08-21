import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import projects from '../data/projects.json';


export default class About extends Component {
    render() {  
        const rolePlay = () => {
            return projects.roleBios.map((role, index ) => {
                return <Segment className="ui stacked segment" 
                        key={index}>
                        <h5>{role.title}</h5>
                        <p>{role.description}</p>
                       </Segment>
        })
    };
        return(
            <div className="ui container">
                { rolePlay() }
            </div>
        )
    }
}