import React, { Component } from 'react';

export default class AboutTitle extends Component {
    render() {
        const {description} = this.props.person;
        console.log({description})
        return(
            <div className="roles">
                 <p>{description}</p>
            </div>
        )
    }
}
