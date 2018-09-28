import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import '../CSS/AboutMe.css';


export default class AboutMe extends Component {
    render() {
        return (
            <div id="about">
                <div className="about-header">
                    <h2>About me</h2>
                </div>
                <div className="ui container about">
                    <div className="about-image odd">
                        <Image src={require("../Media/family.jpg")} alt="family" size="medium"/>
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
                        <Image src={require("../Media/family.jpg")} alt="family" size="medium"/>
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
                    <div className="about-image odd">
                        <Image src={require("../Media/family.jpg")} alt="family" size="medium"/>
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