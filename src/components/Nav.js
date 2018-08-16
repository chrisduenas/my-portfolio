import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';



export default class Nav extends Component {
    state ={}

    handleItemClick = (e, { name } ) => this.setState({ activeItem: name})

    render() {
        const { activeItem } = this.state
        return (
            <Menu className="ui inverted borderless top fixed">
                <Dropdown item text="Chris Duenas" className="chrisduenas">
                    <Dropdown.Menu inverted>
                        <Dropdown.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Dropdown.Item>
                        <Dropdown.Item name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>About</Dropdown.Item>
                        <Dropdown.Item name="projects" active={activeItem === 'projects'} onClick={this.handleItemClick}>Projects</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>

        )
    }
};

