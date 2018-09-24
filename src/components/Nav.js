import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Nav extends Component {
    state ={}

    handleItemClick = (e, { name } ) => this.setState({ activeItem: name})

    render() {
        const { activeItem } = this.state
        return (
                <Menu inverted borderless className="ui fixed menu">
                    <Menu.Item>
                        <img class="ui avatar image" src={require("../Media/logo.png")} alt="logo"/>                    
                    </Menu.Item>
                    <Menu.Item
                        position="right"
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    >
                        About
                    </Menu.Item>

                    <Menu.Item
                        name='projects'
                        active={activeItem === 'projects'}
                        onClick={this.handleItemClick}
                    >
                        Projects
                    </Menu.Item>
                    <Menu.Item
                        name='contact'
                        active={activeItem === 'contact'}
                        onClick={this.handleItemClick}
                    >
                        Contact
                    </Menu.Item>
                </Menu>
        )
    }
};