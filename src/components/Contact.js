import React, { Component } from 'react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import { Icon, Divider } from 'semantic-ui-react';
import '../CSS/Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contact ui fluid">
                <div className="ui container">
                    <h2 className="contact-title">Contact Me</h2>
                    <div className="resume">
                        <a className="social-link" href="https://docs.google.com/document/d/e/2PACX-1vRYWCPQvB-2buIGqKlbHQitxgouYOUN5X8zhC8-fTYbWkoNNshblxQGKUTgvrAGCJGVTxDzLbgkD-cT/pub" download="resume.pdf">
                            <p><strong>Resume</strong></p>
                            <Icon name='file alternate outline' size='big' /> 
                        </a>            
                    </div>
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