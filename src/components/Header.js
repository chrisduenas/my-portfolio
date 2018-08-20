import React, { Component } from 'react';
import '../CSS/Header.css';
import { Grid } from 'semantic-ui-react';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="ui container">
                    <h1 className="name">Chris Duenas</h1>
                </div>
                <Grid className="roles">
                    <Grid.Column>
                        <p>Full Stack Developer</p>
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
                <div class="ui divider"></div>
            </div>

        )
    }
}