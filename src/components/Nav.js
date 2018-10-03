import React, { Component } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { Responsive } from 'semantic-ui-react';
import '../CSS/Nav.css';

export default class Nav extends Component {
    render() {
        return (
            <div id="home" className="nav-menu">
                <Responsive minWidth={768}>
                    <NavDesktop/>
                </Responsive>
                <Responsive maxWidth={768}>
                    <NavMobile/>
                </Responsive>
            </div>      
        )
    }
};
