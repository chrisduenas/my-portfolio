import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import AboutDetails from './AboutDetails';
// import roles from '.../data/roles.json';

export default class AboutTitle extends Component {
    constructor(props) {
        super(props)
        this.state={
            segments : false,
         }
        this.toggleContent = this.toggleContent.bind(this)

    }

    toggleContent(event) {
        event.preventDefault()
        this.setState({ 
        segments : !this.state.segments
        })
    }

    render() {
        const { person } = this.props
        const {segments} = this.state
        return (
            <div>
                <Grid className="roles" grid="true">
                    <Grid.Column>
                        <p onClick={this.toggleContent}
                        toggle={this.toggleRole}>
                        {person.title}</p>
                    </Grid.Column>
                </Grid>
                    { segments ? <AboutDetails/> : null }
            </div>

 
        )
    }
}
