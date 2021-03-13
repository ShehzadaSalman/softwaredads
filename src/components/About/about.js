import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

class About extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="about">
                    <Container>
                        <SectionTitle
                            title1="Our"
                            title2="Mission"
                            desc=""
                        />

                        <Row>
                            {/* <Col md={4}>

                            </Col> */}
                            <Col md={{ size: 7, offset: 3 }}>
                                <Row>
                                    <Col md={10}>
                                        {/* <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6> */}
                                        <h2 className="font-weight-light line-height-1_6 text-dark mb-4 text-center">Passionate About Providing Growth to Businesses</h2>
                                        <p className="text-muted font-weight-light">
                                            Armed with diverse perspectives and experiences, our
                                            high-energy teams unite to develop world-class digital
                                            experiences that grow companies. From brand strategy to web
                                            development to digital marketing, beautiful design isn’t just what
                                            we do; it’s our life’s work.
                                        </p>
                                    </Col>
                                    {/* <Col md={6}>
                                        <h6 className="text-dark font-weight-light f-20 mb-3">Our Vision</h6>
                                        <p className="text-muted font-weight-light">

                                        </p>
                                    </Col> */}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default About;