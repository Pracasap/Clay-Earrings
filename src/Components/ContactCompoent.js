import emailjs from 'emailjs-com';
import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {  Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                email: false,
                message: false
            }
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    validate(firstName, lastName, email, message) {
        const errors = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 1) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (this.state.touched.email && !reg.test(email)) {
            errors.email = 'Email should be valid.';
        }

        if (this.state.touched.message) {
            if (message.length < 2) {
                errors.message = 'Message is required.';
            }
        }
        
        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    resetForm = () => {
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            touched: {
                firstName: false,
                lastName: false,
                email: false,
                message: false
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const templateParams = {
            from_name: this.state.firstName + " " + this.state.lastName,
            email: this.state.email,
            message: this.state.message
        };

        emailjs
        .send('service_z5c92ra', 'template_0cwa6bf', templateParams, 'user_973Q3WIWEZqim59GgWGUL')
        .then(
            function(response) {
                toast.success("Your message has been successfully sent! 🙌 ", {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 3000,
                theme: "dark"
                });
                console.log("SUCCESS!", response.status, response.text);
            },
            function(err) {
                toast.error("Your message was not able to be sent");
            }
        );

        this.resetForm()
    }

    render() {

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.email, this.state.message);
    
        return (
            <div className="container-fluid products">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col mt-5">
                            <h3>Get In Touch</h3>
                        </div>
                    </div>
                    <div className="row row-content" style={{backgroundColor: '#fff', opacity: 0.8, borderRadius: 2}}>
                        <div className="col m-2 m-md-3 m-lg-4 m-xl-5">
                            <ToastContainer />
                            <Form onSubmit={this.handleSubmit} id="contactForm">
                                <FormGroup row className="mb-3">
                                    <Label htmlFor="firstName" className="form-label" lg={2}>First Name</Label>
                                    <Col>
                                        <Input type="text" id="firstName" 
                                        className="form-control form-control-lg" 
                                        name="firstName" 
                                        placeholder="Your First Name"
                                        value={this.state.firstName}
                                        invalid={errors.firstName}
                                        onBlur={this.handleBlur("firstName")}
                                        onChange={this.handleInputChange}
                                        required />
                                        <FormFeedback>{errors.firstName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mb-3">
                                    <Label htmlFor="lastName" className="form-label" lg={2}>Last Name</Label>
                                    <Col>
                                    <Input type="text" id="lastName"
                                        className="form-control form-control-lg" 
                                        name="lastName"
                                        placeholder="Your Last Name"
                                        value={this.state.lastName}
                                        invalid={errors.lastName}
                                        onBlur={this.handleBlur("lastName")}
                                        onChange={this.handleInputChange}
                                        required />
                                        <FormFeedback>{errors.lastName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mb-3">
                                    <Label htmlFor="email" className="form-label" lg={2}>Email</Label>
                                    <Col>
                                    <Input type="email" id="email" name="email"
                                        className="form-control form-control-lg" 
                                        placeholder="you@email.com"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange}
                                        required />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mb-3">
                                    <Label htmlFor="message" className="form-label" lg={2}>Message</Label>
                                    <Col>
                                        <Input type="textarea" id="message" name="message" className="form-control form-control-lg" rows="5"
                                            placeholder="Write your message here"
                                            value={this.state.message}
                                            invalid={errors.message}
                                            onBlur={this.handleBlur("message")}
                                            onChange={this.handleInputChange}
                                            required />
                                        <FormFeedback>{errors.message}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row className="mb-3">
                                    <Col className="col-lg-2 d-none d-lg-block">
                                    </Col>
                                    <Col className="col col-lg-10 d-flex justify-content-center justify-content-lg-start">
                                        <Button className="btn btn-full btn-lg" type="submit">Send</Button>&ensp;
                                        <Button className="btn btn-full btn-lg" type="reset" onClick={this.resetForm}>Reset</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;