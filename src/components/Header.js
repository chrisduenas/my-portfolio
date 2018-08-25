import React, { Component } from 'react';
import '../CSS/Header.css';
import { Grid, Segment } from 'semantic-ui-react';
import About from './About';
import Dev from './About/Dev';
import roles from '../data/roles.json';




export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={ 
            segments : false,
            roles: roles
         }
         this.toggleRole = this.toggleRole.bind(this);

    }

    toggleRole(event) {
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
                            <p onClick={this.toggleRole.bind(this, 1)} >Full Stack Developer</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p onClick={this.toggleRole.bind(this)} >Mixologist</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p onClick={this.toggleRole.bind(this)} >Actor</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p onClick={this.toggleRole.bind(this)} >Fitness Enthusiast</p>
                        </Grid.Column>
                    </Grid>
                <div className="ui divider"></div>
                {this.state.segments && <About/>} 
            </div>

        )
    }
}