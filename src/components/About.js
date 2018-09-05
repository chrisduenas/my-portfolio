import React, { Component } from 'react';
import roles from '../data/roles.json';
import AboutTitle from './About/AboutTitle';
import AboutDetails from './About/AboutDetails';

import '../CSS/About.css';

export default class About extends Component {
constructor(props){
    super(props)
    this.toggleRole =  this.toggleRole.bind(this);
    this.eachRole = this.eachRole.bind(this);
    this.eachDescription = this.eachDescription.bind(this);
    this.state={
        segments: false
        }
    }

    toggleRole(item) {
        this.setState({
            segments: !this.state.segments
        });
        
        
    }

    eachRole(role, i){
        return <AboutTitle key={i}
                           index={i}
                           person={role}
                           toggle={this.toggleRole.bind(this,i)}/>
    }
     eachDescription(role, i){
        return <AboutDetails 
                  key={i}
                  index={i}
                  person={role}/>
     }

    render() {
        const {segments} = this.state

        return (
            <React.Fragment>
            <div className="roles" grid="true">
                {roles.map(this.eachRole)}
            </div>
            { segments ? roles.map((role, i) => {
                return <AboutDetails toggle={this.toggleRole.bind(this, role)} 
                                     key={i}
                                     index={i}
                                     person={role}/>}) : null }
        
            </React.Fragment>
            )
        }
    }

    // roles.map((role, i) => <p key={i}>{role.description}</p>)