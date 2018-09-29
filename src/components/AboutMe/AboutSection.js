import React, { Component } from 'react';
import { Image, Responsive } from 'semantic-ui-react';

export default class AboutSection extends Component {
    render() {
        return (
            <div>
            <div className="ui container about">
                    <div className="about-image">
                            <Image src={require("../../Media/portrait.jpg")} alt="portrait" size="medium"/>
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
                <div className="ui container about">
                    <div className="about-image even">
                        <Image src={require("../../Media/family.jpg")} alt="family" size="medium"/>
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
                <div className="ui container about">
                    <div className="about-image">
                        <Image src={require("../../Media/boys.jpg")} alt="friends" size="medium"/>
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
        )
    }
}