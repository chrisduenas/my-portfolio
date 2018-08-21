import React, { Component } from 'react';
import '../CSS/Header.css';
import { Grid } from 'semantic-ui-react';
import About from './About';


export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            roles: true
        }
        this.showBio = this.showBio.bind(this);
    }

    showBio() {
    this.setState({ roles: !this.state.roles})
    }

    render() {
        return (
            <div className="header">
                <div className="ui container">
                    <h1 className="name">Chris Duenas</h1>
                </div>
                    <Grid className="roles">
                        <Grid.Column>
                            <p onClick={this.showBio}>Full Stack Developer</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p onClick={this.showBio}>Mixologist</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p onClick={this.showBio}>Actor</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p onClick={this.showBio}>Fitness Enthusiast</p>
                        </Grid.Column>
                    </Grid>
                <div className="ui divider"></div>
                {this.state.roles?
                <About/>
                : null }
            </div>

        )
    }
}