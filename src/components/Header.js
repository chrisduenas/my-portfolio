import React, { Component } from 'react';
import '../CSS/Header.css';
import About from './About';
// import AboutTitle from './About/AboutTitle';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="header">
                    <h1 className="name">
                        Chris Duenas
                    </h1>
                    <About/>
            </div>
            </React.Fragment>

        )
    }
}