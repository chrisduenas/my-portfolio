import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

export default class AboutTitle extends Component {
    constructor(props) {
        super(props)
        this.toggleContent = this.toggleContent.bind(this)

    }

    toggleContent(event) {
        event.preventDefault()
        const { toggle } = this.props
        toggle(event)
    }

    render() {
        const { person } = this.props
        return (
            <Grid.Column>
                <p onClick={this.toggleContent}
                   toggle={this.toggleRole}>
                   {person.title}</p>
            </Grid.Column>
 
        )
    }
}
