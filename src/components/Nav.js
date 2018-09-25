import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import '../CSS/Nav.css';

export default class Nav extends Component {
    state ={ activeItem: 'about'}

    handleItemClick = (e, { name } ) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state
        return (
            <div className="nav-menu">
                <Menu pointing secondary className="ui fixed top inverted menu">
                    <Menu.Item>
                        <img class="ui avatar image tiny" src={require("../Media/logo.png")} alt="logo"/>                    
                    </Menu.Item>
                    <Menu.Item
                        position="right"
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    >
                        <p><strong>About</strong></p>
                    </Menu.Item>

                    <Menu.Item
                        name='projects'
                        active={activeItem === 'projects'}
                        onClick={this.handleItemClick}
                    >
                        <p><strong>Projects</strong></p>
                    </Menu.Item>
                    <Menu.Item
                        name='contact'
                        active={activeItem === 'contact'}
                        onClick={this.handleItemClick}
                    >
                        <p><strong>Contact</strong></p>
                    </Menu.Item>
                </Menu>
                </div>
        )
    }
};