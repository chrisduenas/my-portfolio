import React, { Component } from 'react';
import { Image, Responsive, Reveal, Grid } from 'semantic-ui-react';

export default class AboutSection extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <div className="ui container about">
                            <div className="about-image">
                                <Reveal animated='rotate left'>
                                    <Reveal.Content visible>
                                        <Image src={require("../../Media/portrait.jpg")} alt="portrait" size="large"/>
                                    </Reveal.Content>
                                    <Reveal.Content hidden>
                                        <Image src={require("../../Media/portrait.jpg")} alt="portrait" size="large"/>
                                    </Reveal.Content>
                                </Reveal>
                            <div className="about-p">
                                <p>
                                    You're such a fuckin' ho
                                        When the first time they ask you if you want sparklin' or still?
                                        Why you try to act like you was drinkin' sparklin' water 'fore you came out here?
                                        You're such a fuckin' h—
                                        I'm a sick fuck, I like a quick fuck (whoop!)
                                        I'm a sick fuck, I like a quick fuck (whoop!)
                                        I'm a sick fuck, I like a quick fuck (whoop!)
                                        I'm a sick fuck, I like a quick fuck (whoop!)
                                </p>
                                </div>
                            </div>
                        </div>
                    </Grid.Row>
                <Grid.Row>
                <div className="ui container about">
                    <div className="about-image even">
                        <Reveal animated='rotate right'>
                            <Reveal.Content visible>
                                <Image src={require("../../Media/family.jpg")} alt="family" size="massive"/>
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image src={require("../../Media/family.jpg")} alt="family" size="massive"/>
                            </Reveal.Content>
                        </Reveal>
                            <p>
                                You're such a fuckin' ho
                                    When the first time they ask you if you want sparklin' or still?
                                    Why you try to act like you was drinkin' sparklin' water 'fore you came out here?
                                    You're such a fuckin' h—
                                    I'm a sick fuck, I like a quick fuck (whoop!)
                                    I'm a sick fuck, I like a quick fuck (whoop!)
                                    I'm a sick fuck, I like a quick fuck (whoop!)
                                    I'm a sick fuck, I like a quick fuck (whoop!)
                            </p>
                    </div>
                </div>
                </Grid.Row>
                <Grid.Row>
                <div className="ui container about">
                    <div className="about-image">
                    <Reveal animated='rotate left'>
                        <Reveal.Content visible>
                        <Image src={require("../../Media/boys.jpg")} alt="friends" size="massive"/>
                        </Reveal.Content>
                        <Reveal.Content hidden>
                        <Image src={require("../../Media/boys.jpg")} alt="friends" size="massive"/>
                        </Reveal.Content>
                    </Reveal>
                        <p>
                            You're such a fuckin' ho
                                When the first time they ask you if you want sparklin' or still?
                                Why you try to act like you was drinkin' sparklin' water 'fore you came out here?
                                You're such a fuckin' h—
                                I'm a sick fuck, I like a quick fuck (whoop!)
                                I'm a sick fuck, I like a quick fuck (whoop!)
                                I'm a sick fuck, I like a quick fuck (whoop!)
                                I'm a sick fuck, I like a quick fuck (whoop!)
                        </p>
                    </div>
                </div>
                </Grid.Row>
            </Grid>
        </div>
        )
    }
}
