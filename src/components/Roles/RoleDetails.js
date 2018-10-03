import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

export default class RoleTitle extends Component {
    render() {
        const {person} = this.props;
        return(
            <div className="role-description">
                <Segment stacked>
                        <p>{person.description}</p>
                </Segment>
            </div>
        )
    }
}
