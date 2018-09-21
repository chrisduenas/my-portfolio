import React, { Component } from 'react';
import Project from './Project';
import projects from'../data/projects.json';
import { Grid, Segment } from 'semantic-ui-react';
import '../CSS/Projects.css';

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
        };

        return (
            <Segment inverted>
                        <h2>My Projects</h2>
                        <Grid className="projects" grid="true">
                            <Grid.Row>
                                { imageMap() }
                            </Grid.Row>
                        </Grid>
            </Segment>
        );
    }
}