import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    icon: "pe-7s-headphones service-icon",
                    title: "Graphic Designing",
                    desc: ""
                },
                {
                    icon: "pe-7s-tools service-icon",
                    title: "Web Development",
                    desc: ""
                },
                {
                    icon: "pe-7s-display1 service-icon",
                    title: "Wordpress Development",
                    desc: ""
                },
                {
                    icon: "pe-7s-cup service-icon",
                    title: "Ecommerce Solutions",
                    desc: ""
                },
                {
                    icon: "pe-7s-light service-icon",
                    title: "Mobile App Development",
                    desc: ""
                },
                {
                    icon: "pe-7s-graph1 service-icon",
                    title: "Digital Marketing",
                    desc: ""
                },

            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="services">
                    <Container>
                        <SectionTitle
                            title1="Our "
                            title2="Service"
                            desc="The following services we're providing"
                        />

                        <Row>
                            <ServiceBox services={this.state.services} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Service;