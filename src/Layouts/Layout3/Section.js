import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Images
import heroImg from '../../assets/images/hero-3-img.png';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="hero-3-bg position-relative overflow-hidden d-flex align-items-center bg-primary" id="home">
                    <div className="hero-3-bg-overlay"></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className="text-center">
                                    <h1 className="hero-3-title text-white mb-4 font-weight-normal line-height-1_4">
                                        Experienced, Reliable & Commited for a Better Future
                                    </h1>
                                    <p className="text-white-50 mb-4">
                                        We are a digital Agency focused on bringing high quality and innovative digital Solutions that helps you achieve new heights in your business
                                    </p>
                                    <a href="#contact-form" className="btn btn-warning">Get Started</a>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={10}>
                                <div className="hero-3-img">
                                    <img src={heroImg} alt="" className="img-fluid mx-auto d-block" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;