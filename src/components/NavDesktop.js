import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default class NavDesktop extends Component {

    state ={ activeItem: 'about'}
    handleItemClick = (e, { name } ) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state

        return (
                <Menu className="ui fixed top secondary menu">
                    <Menu.Item>
                        <a href="#home">
                            <img class="ui avatar image tiny" src={require("../Media/logo.png")} alt="logo"/>
                        </a>                   
                    </Menu.Item>
                    <Menu.Item
                        href="#about"
                        position="right"
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    >
                    <p><strong>About</strong></p>
                    </Menu.Item>

                    <Menu.Item
                        href="#projects"
                        name='projects'
                        active={activeItem === 'projects'}
                        onClick={this.handleItemClick}
                    >
                        <p><strong>Projects</strong></p>
                    </Menu.Item>
                    <Menu.Item
                        href="#contact"
                        name='contact'
                        active={activeItem === 'contact'}
                        onClick={this.handleItemClick}
                    >
                        <p><strong>Contact</strong></p>
                    </Menu.Item>
                    <Menu.Item
                        href={process.env.PUBLIC_URL + '/resume.pdf'} download="resume.pdf"
                        name='resume'
                        active={activeItem === 'resume'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='download' className="icon-resume"/>
                        <p><strong>Resume</strong></p>
                    </Menu.Item>
                </Menu>
        )
    }
}