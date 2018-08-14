import React, { Component } from 'react';
import '../CSS/Header.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="name">Chris Duenas</h1>
                <div className="roles ui grid">
                    <div className="four wide column">
                        <p>Web Developer</p>
                    </div>
                    <div className="four wide column">
                        <p>Mixologist</p>
                    </div>
                    <div className="four wide column">
                        <p>Actor</p>
                    </div>
                    <div className="four wide column">
                        <p>Fitness Enthusiast</p>
                    </div>
                </div>
                <div class="ui divider"></div>
            </div>

        )
    }
}