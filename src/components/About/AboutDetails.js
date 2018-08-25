import React, { Component } from 'react'

export default class AboutDetails extends Component {
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
    render(){
        const { person } = this.props
        return (
            <div>
                 <div className="ui divider"></div>
                    <div className="ui container">
                        <p onClick={this.toggleContent}>{person}</p> 
                    </div>
            </div>
        )
    }
}