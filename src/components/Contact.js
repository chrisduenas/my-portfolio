import React, { Component } from 'react';
import { Grid, Icon, Divider } from 'semantic-ui-react';
import '../CSS/Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="ui container">
                    <h2 className="contact-title">Contact Me</h2>
                <div className="resume">
                        <a className="social-link" href='https://www.dropbox.com/home?preview=chrisduenas+resume+2018.pdf'>
                            <p><strong>Resume</strong></p>
                            <Icon name='file alternate outline' size='big' /> 
                        </a>
                        <a className="social-link" href='mailto:chrisduenasonline@gmail.com'>
                            <p><strong>Email</strong></p>
                            <Icon name='mail' size='big' /> 
                        </a>
                </div>
                <Divider section/>
                    <Grid className="columns">
                        <Grid.Row>
                            <Grid.Column>
                            <a className="social-link" href='https://github.com/chrisduenas'>
                            <Icon name="github" size='big' /> 
                            </a>
                            </Grid.Column>
                            <Grid.Column>
                            <a className="social-link" href='https://www.linkedin.com/in/christopherduenas/'>
                            <Icon name='linkedin' size='big' /> 
                            </a>
                            </Grid.Column>
                            <Grid.Column>
                            <a className="social-link" href='https://www.facebook.com/Chris.A.Duenas'>
                                <Icon name='facebook' size='big' /> 
                                </a>
                            </Grid.Column>
                            <Grid.Column>
                                <a className="social-link" href='https://twitter.com/christopherdue'>
                                <Icon name='twitter' size='big' /> 
                                </a>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <div className="ui container">
                        <p>Copyright Chris Duenas 2018</p>
                    </div>
            </div>
            </div>
        )
    }
}