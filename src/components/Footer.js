import React, { Component } from 'react';


export default class Footer extends Component {
    render() {
        return (
            <div className="ui inverted borderless menu">
                <div className="ui container">
                        <p className="item">Copyright Chris Duenas 2018</p>
                    <div className="right menu">
                            <div className="item">
                                <a href="https://github.com/chrisduenas">
                                   <i className="ui github icon"></i>
                                </a>
                            </div>
                            <div className="item">
                                <a href="https://www.linkedin.com/in/christopherduenas/">
                                    <i className="ui linkedin icon"></i>
                                </a>
                            </div>
                            <div className="item">
                                <a href="https://www.dropbox.com/s/2w24t829ypvzn3d/chrisduenas%20resume%202018.pdf?dl=0">
                                    <i className="ui file outline icon"></i>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}