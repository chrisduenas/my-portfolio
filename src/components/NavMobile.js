import React, { Component } from 'react';
import { Menu, Dropdown, DropdownDivider } from 'semantic-ui-react';


export default class NavMobile extends Component {

    state ={ activeItem: 'about'}
    handleItemClick = (e, { name } ) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state
        return (
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

                                <Dropdown.Item href="#home">
                                            Back To Top
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu>
        )
    }
}