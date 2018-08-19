import React, { Component } from 'react';
import '../CSS/Projects.css';


export default class Project extends Component {
    render() {

        let imgClass = this.props.imgName + ' portfolio-img';

        return (
            <div className="project">
                <h5 id="title">{this.props.title}</h5>
                <div className={ imgClass } imgClass></div>
                <p id="proj-p">{this.props.description}</p>
            </div>

        )
    }
};