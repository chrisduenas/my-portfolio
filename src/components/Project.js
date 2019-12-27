import React, { Component } from 'react';
import '../CSS/Projects.css';


export default class Project extends Component {
    render() {

        let imgClass = this.props.imgName + ' portfolio-img';
        let link = this.props.linkTo;

        return (
            <a href={link} target="blank">
                <div className="project">
                    <h5 id="title">{this.props.title}</h5>
                        <div className={ imgClass }></div>
                        <p id="description">{this.props.description}</p>
                </div>
            </a>
        )
    }
};