import React, { Component } from 'react';
import '../CSS/Projects.css';


export default class Project extends Component {
    render() {

        let imgClass = this.props.imgName + ' portfolio-img';

        return (
            <div>
                <h2>{this.props.title}</h2>
                <div className={ imgClass }></div>
                <p>{this.props.description}</p>
            </div>

        )
    }
};