import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';


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
                            <div className="item"></div>
                    </div>
                </div>
            </div>
        )
    }
}