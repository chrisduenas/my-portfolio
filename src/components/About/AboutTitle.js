import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

export default class AboutTitle extends Component {
    constructor(props) {
        super(props)
        this.titleWasClicked = this.titleWasClicked.bind(this)
        this.toggleContent = this.toggleContent.bind(this)
        this.state = {
            showContent: false

        }
    }
    titleWasClicked(event) {
        event.preventDefault()
        const { dataCallback } = this.props
        dataCallback(event)
    }

    toggleContent(event) {
        event.preventDefault()
        const { toggle } = this.props
        toggle(event)
        // this.setState({ 
        //     showContent: !this.state.showContent
        // })
    }

    render() {
        const { person } = this.props
        const { showContent } = this.state
        return (
            <div>
                <Grid.Column>
                    <p onClick={this.toggleContent}>{person.title}</p>
                </Grid.Column>
            </div>
        )
    }
}
