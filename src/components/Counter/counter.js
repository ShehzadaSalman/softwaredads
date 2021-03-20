import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Blog Box
import CounterBox from "./counter-box";

//Import Images
import counterbg from "../../assets/images/wallpaper1.webp";
import portfolio1 from "../../assets/images/portfolio/apps.png"
import portfolio2 from "../../assets/images/portfolio/3rddesign.png"
import portfolio3 from "../../assets/images/portfolio/bookstudio.jpg"
import portfolio4 from "../../assets/images/portfolio/CE30.png"
import portfolio5 from "../../assets/images/portfolio/digital-agency.png"
import portfolio6 from "../../assets/images/portfolio/CE32.png"
import portfolio7 from "../../assets/images/portfolio/csg.png"
import portfolio8 from "../../assets/images/portfolio/foodeyes.jpg"
import portfolio9 from "../../assets/images/portfolio/halrezo.jpg"
import portfolio10 from "../../assets/images/portfolio/if.png"
import portfolio11 from "../../assets/images/portfolio/nd.png"
import portfolio12 from "../../assets/images/portfolio/pf-img-10.jpg"
import portfolio13 from "../../assets/images/portfolio/workshop.png"
import portfolio14 from "../../assets/images/portfolio/pf-img-11.jpg"
import portfolio15 from "../../assets/images/portfolio/pf-img-12.jpg"
import portfolio16 from "../../assets/images/portfolio/pf-img-13.jpg"
import portfolio17 from "../../assets/images/portfolio/pf-img-14.jpg"




class Counter extends Component {
    state = {
        counters: [
            { icon: "pe-7s-like2", title: "SUCCESSFUL PROJECT", postfix: "+", end: 620 },
            { icon: "pe-7s-light", title: "PROJECT IDEAS", postfix: "+", end: 350 },
            { icon: "pe-7s-smile", title: "SATISFIED CLIENTS", postfix: "+", end: 800 },
            { icon: "pe-7s-star", title: "AWARD WIN", postfix: "", end: 590 },
        ],
    }
    render() {
        return (
            <React.Fragment>
                <section className="section counter-bg" style={{ background: `url(${counterbg}) center center` }}>
                    <div className="bg-overlay op-75"></div>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className="text-center mb-5">
                                    <h2 className="font-weight-normal text-white mb-2">Work Gallery</h2>
                                    <h5 className="font-weight-normal text-white-70">A Glimpse into our work</h5>
                                </div>
                            </Col>
                        </Row>
                        <Row id="counter">
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio1} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio2} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio3} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio4} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio5} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio6} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio7} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio8} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio9} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio10} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio11} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            <Col sm={6} lg={3} className="mb-4">
                                <img src={portfolio12} alt="portfolio" style={{ width: '100%' }} />
                            </Col>
                            {/* <CounterBox counters={this.state.counters} /> */}
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Counter;