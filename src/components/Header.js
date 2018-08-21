import React, { Component } from 'react';
import '../CSS/Header.css';
import { Grid } from 'semantic-ui-react';


export default class Header extends Component {

    handleClick = () => {
        console.log();
    }
    render() {
        return (
            <div className="header">
                <div className="ui container">
                    <h1 className="name">Chris Duenas</h1>
                </div>
                    <Grid className="roles">
                        <Grid.Column>
                            <p onClick={this.handleClick}>Full Stack Developer</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>Mixologist</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>Actor</p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>Fitness Enthusiast</p>
                        </Grid.Column>
                    </Grid>
                <div className="ui divider"></div>
            </div>

        )
    }
}