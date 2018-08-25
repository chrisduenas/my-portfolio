import React, { Component } from 'react';
import '../CSS/Header.css';
import About from './About';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="ui container">
                    <h1 className="name">Chris Duenas</h1>
                </div>
                <div className="ui container">
                    <About/>
                </div>
            </div>

        )
    }
}