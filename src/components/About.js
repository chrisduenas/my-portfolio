import React, { Component } from 'react';
import roles from '../data/roles.json';
import AboutTitle from './About/AboutTitle';
import '../CSS/About.css';

export default class About extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="roles" grid="true">
                        { roles.map((role, index) => {
                            return <AboutTitle person={role}
                                               key={index}
                                    />
                                })}
            </div>
            )
        }
    }

