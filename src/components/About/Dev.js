import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

export default class Dev extends Component {
    render() {
        return (
            <Grid>
                <Segment>
                    <div>
                        <h5>Full Stack Developer</h5>
                        <p>I am a full stack Dev</p>
                    </div>
                </Segment>
            </Grid>
        )
    }
}