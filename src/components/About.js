import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import roles from '../data/roles.json';
import AboutTitle from './About/AboutTitle';
import AboutDetails from './About/AboutDetails'


export default class About extends Component {
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
        segments : !this.state.segments
        })
    }

    render() {
        const { segments } = this.state
        return (
            <div>
                <Grid className="roles" grid="true">
                        { roles.map((role, index) => {
                            return <AboutTitle person={role}
                                               key={index}
                                               toggle={this.toggleRole}

                                    />
                            })}
                </Grid>
                <div>
                    { segments ? <AboutDetails/> : null }
                </div>
            </div>


            )
        }
    }

