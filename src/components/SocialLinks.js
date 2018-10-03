import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';

export default class SocialLinks extends Component {
    render() {
        return (
                <Grid className="columns">
                    <Grid.Row>
                        <Grid.Column>
                            <a className="social-link" href='https://github.com/chrisduenas' target="blank">
                                <Icon name="github" size='big' /> 
                            </a>
                        </Grid.Column>
                        <Grid.Column>
                            <a className="social-link" href='https://www.linkedin.com/in/christopherduenas/' target="blank">
                                <Icon name='linkedin' size='big' /> 
                            </a>
                        </Grid.Column>
                        <Grid.Column>
                            <a className="social-link" href='https://www.facebook.com/Chris.A.Duenas' target="blank">
                                <Icon name='facebook' size='big' /> 
                            </a>
                        </Grid.Column>
                        <Grid.Column>
                            <a className="social-link" href='https://twitter.com/christopherdue' target="blank">
                                <Icon name='twitter' size='big' /> 
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
}