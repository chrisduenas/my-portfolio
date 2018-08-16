import React, { Component } from 'react';
import Project from './Project';
import projects from'../data/projects.json';


export default class Projects extends Component {
    render() {
        const imageMap = () => {
            return projects.allProjects.map( (project, index) => {
                return <Project key={index}
                                title={project.title}
                                imgName={project.imgName}
                                description={project.description}
                                />
            })
        }
        
        return (
                <section id="projects">
                    <a className="to-top :visted" >
                        <i className="far fa-arrow-alt-circle-up"></i>
                    </a>
                    <header>
                        <h1>My Projects</h1>
                        <p>These are some of my projects</p>
                    </header>
              
                        { imageMap() }

                        
                </section>
        );
    }
}