import React, { Component } from 'react';

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
                <div className="roles" 
                     grid="true"
                     onClick={this.toggleContent}
                     toggle={this.toggleRole}>
                        <p>{person.title}</p>
                </div>
                <div className="about-description">
                    { segments ? <p>{person.description}</p> : null }
                </div>
            </div>
        )
    }
}
