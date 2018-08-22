import React, { Component } from 'react';
import '../CSS/Header.css';
import { Grid, Segment } from 'semantic-ui-react';
import About from './About';
import roles from '../data/roles.json';



export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={ 
            segments : false,
            roles: roles.roleBios
         }
         this.toggleRole = this.toggleRole.bind(this);
    }

    toggleRole() {
        const roleModel = roles.roleBios.map(role => `${role.title} : ${role.description}`);
        const model = roleModel.forEach(function(e) {
            console.log(e);
        });

        this.setState({ 
        segments : !this.state.segments,
        })

}

    render() {

        return (
            <div className="header">
                <div className="ui container">
                    <h1 className="name">Chris Duenas</h1>
                </div>
                    <Grid className="roles" grid="true">
                        <Grid.Column>
                            <p onClick={this.toggleRole} className={this.state.segments ? <About/> : null }>Full Stack Developer</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p onClick={this.toggleRole} className={this.state.segments ? <About/> : null }>Mixologist</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p onClick={this.toggleRole} className={this.state.segments ? <About/> : null }>Actor</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p onClick={this.toggleRole} className={this.state.segments ? <About/> : null }>Fitness Enthusiast</p>
                        </Grid.Column>
                    </Grid>
                <div className="ui divider"></div>
                {this.state.segments ?
                <About/>
                : null }
            </div>

        )
    }
}