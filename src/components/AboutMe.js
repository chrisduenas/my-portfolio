import React, { Component } from 'react';
import AboutSection from './AboutMe/AboutSection';
import { Responsive } from 'semantic-ui-react';
import '../CSS/AboutMe.css';


export default class AboutMe extends Component {
    render() {
        return (
            <div id="about">
                <div className="about-header">
                    <h2>About me</h2>
                </div>
                <Responsive min-width={768}>
                    <AboutSection/>
                </Responsive>
                <Responsive max-width={768}>
                </Responsive>
            </div>
        )
    }
}