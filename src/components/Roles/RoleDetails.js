import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

export default class RoleTitle extends Component {
    render() {
        const {description} = this.props.person;
        return(
            <div className="role-description">
                <Segment stacked>
                        <p>{description}</p>
                </Segment>
            </div>
        )
    }
}
