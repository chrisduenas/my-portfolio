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
        segments: false,
        activeRole: 0
        }
    }

    toggleRole(item) {
        this.setState({
            segments: !this.state.segments,
            activeRole: item
        });
        
    }

    eachRole(role, i){
        return <AboutTitle key={i}
                           index={i}
                           person={role}
                           toggle={this.toggleRole.bind(this, i)}/>
    }
     eachDescription(role, i){
        return <AboutDetails
                  activeRole={i}
                  key={i}
                  index={i}
                  person={role}/>
     }

    render() {
        const {segments} = this.state
        console.log(this.state.activeRole);
        const roleDescription = this.eachDescription(roles[this.state.activeRole], this.state.activeRole);
        return (
            <React.Fragment>
                <div className="roles" grid="true">
                    {roles.map(this.eachRole)}
                </div>
                <div>
                    { segments ? roleDescription : null }
                </div>
            </React.Fragment>
            )
        }
    }