import React, { Component } from 'react';
import { Image, Responsive, Reveal, Grid } from 'semantic-ui-react';

export default class AboutSection extends Component {

    render() {
        return (
                <Grid>
                    <Grid.Row>
                        <div className="ui container about">
                            <div className="about-image">
                            <Responsive minWidth={768}>
                                <Image src={require("../../Media/suit.jpg")} alt="portrait" size="large"/>
                            </Responsive>
                            <Responsive maxWidth={768}>
                                <Image src={require("../../Media/suit.jpg")} alt="portrait" size="medium"/>
                            </Responsive>
                            </div>
                            <div className="about-p">
                                <p>
                                    I had always found an interest in coding and after hearing about Wyncode 
                                    from my local cocktail from I decided to enroll in the 
                                    full-immersive bootcamp to put my skills to the test. I was seeking a new 
                                    challenge and after my experience, I seek for greater challeneges. My mission is
                                    to build web applications to solve real world problems. 
                                </p>
                            </div>
                        </div>
                    </Grid.Row>
                </Grid>
        )
    }
}
