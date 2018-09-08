import React, { Component } from 'react';
import '../CSS/Header.css';
import About from './About';
// import AboutTitle from './About/AboutTitle';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="header">
                <div className="ui container">
                    <h1 className="name">
                        Chris Duenas
                    </h1>
                </div>
            </div>
            <div className="bartender">
                <About/>
            </div>
            </React.Fragment>

        )
    }
}