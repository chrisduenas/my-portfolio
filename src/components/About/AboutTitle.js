import React, { Component } from 'react';
import Flip from 'react-reveal/Flip';

export default class AboutTitle extends Component {
    constructor(props) {
        super(props)
        this.state={
            segments : false,
         }
        this.toggleContent = this.toggleContent.bind(this)

    }

    toggleContent(event) {
        event.preventDefault();
        const {toggle} = this.props
        toggle(event)
    }

    render() {
        const { person } = this.props
        return (
            <div>
                <div className="roles" 
                     grid="true"
                     onClick={this.toggleContent}>
                        <Flip bottom delay={3000}>
                            <p><strong>
                               <a href="#" 
                                  className="effect-shine">
                                    {person.title}
                               </a>
                            </strong>
                            </p>
                        </Flip>
                </div>
            </div>
        )
    }
}
