import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';


export default class Projects extends Component {
    render() {
        return (
            <Grid container columns={3}>
                <Grid.Column>
                    <Image src='../Media/luna.jpg'/>
                </Grid.Column>
                <Grid.Column>
                    <Image src='../Media/luna.jpg'/>
                </Grid.Column>
                <Grid.Column>
                    <Image src='../Media/luna.jpg'/>
                </Grid.Column>
            </Grid>
        );
    }
}