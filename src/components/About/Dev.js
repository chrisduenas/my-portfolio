import React, { Component } from 'react';
// import roles from '.../data/roles.json';
// import { Segment } from 'semantic-ui-react';

export default class Dev extends Component {
    constructor(props) {
        super(props)
        this.titleWasClicked = this.titleWasClicked.bind(this)
        this.toggleRoles = this.toggleRoles.bind(this)
        this.state = {
            showRoles: true
        }
    }

    titleWasClicked(event) {
        event.preventDefault()
        const { dataCallback } = this.props
        dataCallback('hello world!');
        console.log(dataCallback);
    }

    toggleRoles(event){
        event.preventDefault()
        this.setState({
            showRoles: !this.state.showRoles
        })
    }

    render() {
        const { item } = this.props
        const { showRoles } = this.state
        return (
            <div>
                <h5 onClick={this.titleWasClicked}>{item.title}</h5>
                { showRoles === true ? <p>{item.description}</p> : ''}
            </div>
        )
    }
}
