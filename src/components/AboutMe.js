import React, { Component } from 'react';
import AboutSection from './AboutMe/AboutSection';
import '../CSS/AboutMe.css';


export default class AboutMe extends Component {
    render() {
        return (
            <div id="about">
                <div className="about-header">
                    <h2>About me</h2>
                </div>
                    <AboutSection/>
            </div>
        )
    }
}