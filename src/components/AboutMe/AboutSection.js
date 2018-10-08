import React, { Component } from 'react';
import { Image, Responsive, Grid } from 'semantic-ui-react';

export default class AboutSection extends Component {

    render() {
        return (
                <Grid>
                    <Grid.Row>
                        <div className="ui container about">
                            <div className="about-image">
                                <h5>Full Stack Developer with Entrepreneurial Spirit</h5>
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
                                    I decided to enroll in a full-immersive bootcamp to put my skills to the
                                    test. I seeked for a new challenge and after my experience, my mission is to
                                    build web applications to solve real world problems.
                                <br/>
                                <br/>
                                    My life beyond developing software involves meal-prepping, the gym, and going on adventures 
                                    with my girlfriend Kristy and Luna the husky.
                                </p>
                            </div>
                        </div>
                    </Grid.Row>
                </Grid>
        )
    }
}
