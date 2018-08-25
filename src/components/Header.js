import React, { Component } from 'react';
import '../CSS/Header.css';
import About from './About';
import roles from '../data/roles.json';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            roles: roles,
            segments : false,
         }
         this.toggleRole = this.toggleRole.bind(this);
    }

    toggleRole(event) {
        event.preventDefault()
        this.setState({ 
        segments : !this.state.segments,
        })
    }
    
    render() {
        return (
            <div className="header">
                <div className="ui container">
                    <h1 className="name">Chris Duenas</h1>
                </div>
                <About/>
            </div>

        )
    }
}