import React, { Component } from 'react';
import '../CSS/Projects.css';


export default class Project extends Component {
    render() {

        let imgClass = this.props.imgName + ' portfolio-img';
        let link = this.props.linkTo;

        return (
            <div className="project">
                <h5 id="title">{this.props.title}</h5>
                <a href={link} target="blank">
                <div className={ imgClass }></div>
                </a>
                <p id="proj-p">{this.props.description}</p>
            </div>

        )
    }
};