import React, { Component } from 'react';



export default class Nav extends Component {
    render() {
        return (
                <div className="ui inverted segment">
                    <div className="ui inverted pointing fixed menu">
                        <div className="item left">
                            <a href="#">Chris Duenas</a>
                        </div>
                        <div className="item">
                            <a href="#">About Me</a>
                        </div>
                        <div className="item">
                            <a href="#">Projects</a>
                        </div>
                    </div>
                 </div> 
        )
    }
};