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
                    icon: "pe-7s-tools service-icon",
                    title: "Graphic Designing",
                    desc: "Receive the design you love with our graphic designing services artistically fashioned by our quality designers. We use a holistic approach in designing and creating deliverables ranging from logos to social media posts and stunning flyers for your business."
                },
                {
                    icon: "pe-7s-tools service-icon",
                    title: "Web Development",
                    desc: "Aesthetically appealing yet interactive, the websites created by our team will ensure a great virtual outlook to your business. Our team will tailor your website in line with your personal and business requirements to maximize the potential of bringing in business and maximizing ROI. The customization of websites will be unique and molded according to your business persona. "
                },
                {
                    icon: "pe-7s-tools service-icon",
                    title: "Wordpress Development",
                    desc: "Our developers work in compliance with the latest trends and best practices to provide WordPress solutions. We provide end to end services from inception to deployment, maintenance, and improvements including developing high-quality themes and custom plugins from scratch to meet your very unique needs. "
                },
                {
                    icon: "pe-7s-tools service-icon",
                    title: "Ecommerce Solutions",
                    desc: "Enjoy customized ecommerce platforms with uniquely added features to address needs across any business or industry to up sell products. Our magnificently designed ecommerce stores will ensure an enjoyable and smooth shopping experience for your customers. "
                },
                {
                    icon: "pe-7s-tools service-icon",
                    title: "Mobile App Development",
                    desc: "We skillfully dispense mobile application development services for all smartphone platforms. Our team of engineers will operate closely with you to understand your business requirements to craft elegant user-friendly applications for your users. We also deliver follow up services to ensure optimal user experience and functionality. "
                },
                {
                    icon: "pe-7s-tools service-icon",
                    title: "Digital Marketing",
                    desc: "Convert your online visitors into paying customers with our bespoke digital marketing strategies to increase the amount of quality leads and sales. With our marketing services, build brand recognition and increase profitability."
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