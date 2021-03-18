import React, { Component } from 'react';
import { Container, Row, Col, Label, Button, FormGroup } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios'

//Import Section Title
import SectionTitle from "../common/section-title";

class GetInTouch extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }



    ValidSubmit = async () => {
        let formdata = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

        console.log(this.state.name)
        // submit the form

        // eslint-disable-next-line
        try {
            // await axios.post('https://getform.io/f/4c535835-82f4-4ed3-b651-6de005c74865', {
            //     body: data,
            // })
            const resp = await axios({
                method: 'post',
                url: 'https://getform.io/f/4c535835-82f4-4ed3-b651-6de005c74865',
                data: { ...formdata }
            });
            console.log(resp)
            console.log("we have submitted the form")
        } catch (e) {
            console.log("could not submit the form")
            console.log(e)
        }

    }



    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container>
                        <SectionTitle
                            title1="Get In "
                            title2="Touch"
                            desc="Leave us a message, we're always available"
                        />

                        <Row>
                            <Col lg={4}>
                                <div className="contact-address">
                                    <h4 className="text-dark mb-4">Contact Info</h4>
                                    <p className="text-muted f-15">Our Contact Info is listed below!</p>
                                </div>
                                <Row>
                                    <Col md={6}>
                                        <div className="contact-address">
                                            <h5 className="text-dark mb-3 f-16">Office Address:</h5>
                                            <p className="text-muted f-15">Office No. LG21, Zainab Tower, Link Road, Model Town, Lahore </p>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="contact-address">
                                            <h5 className="text-dark mb-3 f-16">Phone Number</h5>
                                            <p className="text-muted f-15">+92349-4826779</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col lg={{ size: 7, offset: 1 }}>
                                <div className="custom-form mt-4 mt-lg-0">
                                    <div id="message"></div>
                                    <AvForm name="contact-form" id="contact-form" onValidSubmit={this.ValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                                        <Row>
                                            <Col lg={6}>
                                                <FormGroup className="app-label">
                                                    <Label for="name">Name</Label>
                                                    <AvField
                                                        name="name"
                                                        id="name"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Your name..."
                                                        errorMessage="Enter Your Name.."
                                                        onChange={e => this.setState({ name: e.target.value })}
                                                        validate={{ required: { value: true } }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg={6}>
                                                <FormGroup className="app-label">
                                                    <Label for="email">Email address</Label>
                                                    <AvField
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Your email..."
                                                        onChange={e => this.setState({ email: e.target.value })}
                                                        errorMessage="Enter Your email..."
                                                        validate={{
                                                            required: { value: true },
                                                            email: { value: true }
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg={12}>
                                                <FormGroup className="app-label">
                                                    <Label for="subject">Subject</Label>
                                                    <AvField
                                                        name="subject"
                                                        id="subject"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Subject.."
                                                        onChange={e => this.setState({ subject: e.target.value })}
                                                        errorMessage="Enter Your PSubject"
                                                        validate={{
                                                            required: { value: true },
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg={12}>
                                                <FormGroup className="app-label">
                                                    <Label for="comments">Message</Label>
                                                    <textarea name="comments" id="comments" rows="3"
                                                        onChange={e => this.setState({ message: e.target.value })}
                                                        className="form-control" placeholder="Enter message.."></textarea>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Button type="submit" id="submit" name="send" color="warning">Send Message <i className="mdi mdi-telegram ml-2"></i></Button>
                                                <div id="simple-msg"></div>
                                            </Col>
                                        </Row>
                                    </AvForm>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default GetInTouch;