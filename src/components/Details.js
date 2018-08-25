import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import roles from '../data/roles.json';
import AboutDetails from './About/AboutDetails';


export default class Details extends Component {
    constructor(props){
        super(props)
        this.state={
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
        const { segments } = this.state
        return (
                <Grid className="roles" grid="true">
                    { roles.map((role, index) => {
                        return <AboutDetails person={role}
                                                key={index}
                                                toggle={this.toggleRole}

                                />
                        })}
                </Grid>
            )
        }
    }
