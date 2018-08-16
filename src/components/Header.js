import React, { Component } from 'react';
import '../CSS/Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="ui container">
                    <h1 className="name">Chris Duenas</h1>
                </div>
                <div className="roles ui grid">
                    <div className="">
                        <p>Full Stack Developer</p>
                    </div>
                    <div className="">
                        <p>Mixologist</p>
                    </div>
                    <div className="">
                        <p>Actor</p>
                    </div>
                    <div className="">
                        <p>Fitness Enthusiast</p>
                    </div>
                </div>
                <div class="ui divider"></div>
            </div>

        )
    }
}