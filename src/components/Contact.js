import React, { Component } from 'react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import { Divider } from 'semantic-ui-react';
import '../CSS/Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div id="contact" >
                <div className="ui container">
                    <h2 className="contact-title">Contact Me</h2>
                    <ContactForm/>
                    <SocialLinks/>

</div>
                <div className="ui-fluid footer">
                    <p>Copyright Chris Duenas 2018</p>
                </div>
            </div>
        )
    }
}