import React, { Component } from 'react';
import '../CSS/Header.css';
import Roles from './Roles';
import Zoom from 'react-reveal/Zoom';

export default class Header extends Component {
    render() {
        return (
                <div className="header">
                    <div>
                    <Zoom bottom duration={1000} delay={1000}>
                        <h1 className="name">Chris Duenas</h1>
                    </Zoom>
                    <Roles/>
                    </div>
                </div>
        )
    }
}