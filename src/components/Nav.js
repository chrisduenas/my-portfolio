import React, { Component } from 'react';
import { Menu, Responsive, Dropdown, DropdownDivider } from 'semantic-ui-react';
import '../CSS/Nav.css';

export default class Nav extends Component {
    state ={ activeItem: 'about'}


    handleItemClick = (e, { name } ) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state
        return (
            <div id="home" className="nav-menu">
                <Responsive minWidth={768}>
                    <Menu className="ui fixed top secondary menu">
                        <Menu.Item><a href="#home">
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
                            <p><strong>Resume</strong></p>
                        </Menu.Item>
                    </Menu>
                </Responsive>
                <Responsive maxWidth={768}>
                    <Menu className="fixed inverted borderless compact">
                        <Dropdown icon="content" className='link item'>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                        href="#about"
                                        position="right"
                                        name='about'
                                        active={activeItem === 'about'}
                                        onClick={this.handleItemClick}>
                                            About
                                </Dropdown.Item>
                                <Dropdown.Item
                                        href="#projects"
                                        name='projects'
                                        active={activeItem === 'projects'}
                                        onClick={this.handleItemClick}>
                                            Projects
                                </Dropdown.Item>
                                <Dropdown.Item
                                        href="#contact"
                                        name='contact'
                                        active={activeItem === 'contact'}
                                        onClick={this.handleItemClick}>
                                            Contact
                                </Dropdown.Item>
                                <Dropdown.Item
                                        href={process.env.PUBLIC_URL + '/resume.pdf'} download="resume.pdf"
                                        name='resume'
                                        active={activeItem === 'resume'}
                                        onClick={this.handleItemClick}>
                                            Resume
                                </Dropdown.Item>

                                <DropdownDivider/>

                                <Dropdown.Item
                                        href="#home">
                                            Back To Top
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu>
                </Responsive>
            </div>      
        )
    }
};
