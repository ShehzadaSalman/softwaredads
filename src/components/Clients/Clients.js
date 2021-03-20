import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../../components/common/section-title";
import ClientsSlider from "./Clients-slider";

//Import Images
import client1 from "../../assets/images/user/img-1.png";
import client2 from "../../assets/images/user/img-2.png";
import client3 from "../../assets/images/user/img-3.png";


class Clients extends Component {
    state = {
        clients: [
            { image: client1, name: "Linda D. Shenk", post: "CEO", desc: "Really helpful and friendly team. They helped me launch my business by providing the most effective e-commerce services." },
            { image: client2, name: "Barney M. Harris", post: "Director", desc: "They made sure to listen to all my demands and incorporate them into the website that they designed. Loved working with them. " },
            { image: client3, name: "Peggy S. Eckart", post: "Director", desc: "There graphic designing team is very talented. Software dads has a knack for creativity and always give me the best designs." },

        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="clients">
                    <Container>
                        <SectionTitle
                            title1="Our "
                            title2="Clients"
                            desc="What our clients had some interesting thoughts"
                        />
                        <Row>
                            <Col lg={4}>
                                <h3 className="font-weight-normal mt-3 line-height-1_4">Some Words From Our <span className="font-weight-medium text-warning">Happy Clients </span></h3>
                                <div className="testi-border my-4"></div>
                                <p className="text-muted"></p>
                            </Col>
                            <Col lg={8}>
                                <ClientsSlider clients={this.state.clients} />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Clients;