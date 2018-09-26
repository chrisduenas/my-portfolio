import React, { Component } from 'react';
import '../CSS/Header.css';
import About from './About';
import Zoom from 'react-reveal/Zoom';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <Zoom bottom duration={1500}>
                        <h1 className="name">Chris Duenas</h1>
                    </Zoom>
                    <About/>
                </div>
            </React.Fragment>

        )
    }
}