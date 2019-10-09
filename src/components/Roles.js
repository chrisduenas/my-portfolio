import React, { Component } from 'react';
import roles from '../data/roles.json';
import RoleTitle from './Roles/RoleTitle';
import RoleDetails from './Roles/RoleDetails';
import '../CSS/Roles.css';


export default class Roles extends Component {
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
        return <RoleTitle key={i}
                           index={i}
                           person={role}
                           toggle={this.toggleRole.bind(this, i)}/>
    }
     eachDescription(role, i){
        return <RoleDetails
                  activeRole={i}
                  key={i}
                  person={role}/>
     }

    render() {
        const {segments} = this.state
        const activeRole = this.state.activeRole;
        const roleDescription = this.eachDescription(roles[activeRole], activeRole);
        return (
            <React.Fragment>
                <div className="roles">
                    {roles.map(this.eachRole)}
                </div>
                <div> 
                    { segments ? roleDescription : null }
                </div>
            </React.Fragment>
            )
        }
    }