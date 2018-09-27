import React, { Component } from 'react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import { Divider } from 'semantic-ui-react';
import '../CSS/Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contact ui fluid">
                <div className="ui container">
                    <h2 className="contact-title">Contact Me</h2>
                    <Divider section/>

                    <ContactForm/>
                    <SocialLinks/>

                    <Divider section/>
                </div>
                <div>
                    <p>Copyright Chris Duenas 2018</p>
                </div>
            </div>
        )
    }
}