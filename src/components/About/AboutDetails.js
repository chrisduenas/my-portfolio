import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

export default class AboutTitle extends Component {
    render() {
        const {description} = this.props.person;
        return(
            <div className="about-description">
                <Segment stacked>
                        <p>{description}</p>
                </Segment>
            </div>
        )
    }
}
