import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class ContactForm extends Component {
    render() {  
        const inputStyle = {
            display: "none"
        }
        return (
            <Form id="contactform" action="//formspree.io/chrisduenasonline@gmail.com" method="POST">
                <Form.Field>                         
                    <input type="text" name="name" placeholder="Name"></input>
                </Form.Field>
                <Form.Field>                        
                    <input type="text" name="_replyto" placeholder="Email"></input>
                </Form.Field>
                <Form.Field>                        
                    <input type="text" name="_subject" placeholder="Subject"></input>
                </Form.Field>
                <Form.Field>
                    <textarea name="message" placeholder="Your Message"></textarea>
                    <input type="text" name="_gotcha" style={inputStyle} />
                </Form.Field>
                <Button type='submit' value="Send">Submit</Button>
            </Form>
        )
    }
}