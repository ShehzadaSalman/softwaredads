import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";
import feature2 from "../../assets/images/features/img-2.png";
import feature3 from "../../assets/images/features/img-3.png";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                {
                    id: 1, img: feature1, icon: "mdi  mdi-laptop-mac", title: "Activity Reporting",
                    desc: "We ensure our clients are well informed and up to date at all times. We create a plan of action and provide regular overview of all activities so that our clients can be involved in the process of building their brand. ", link: "/"
                },
                {
                    id: 2, img: feature2, icon: "mdi  mdi-account-group", title: "Team Management",
                    desc: "Teamwork and collaboration is at the heart of software dads. Each member of our team not only performs their personal tasks effectively but cooperates with each other to assist our clients to the best of their ability. ", link: "/"
                },
                {
                    id: 3, img: feature3, icon: "mdi  mdi-chart-bell-curve", title: "Marketing Analysis",
                    desc: "We make sure that we are well informed before we jump into any project. Our team performs a thorough market assessment and analysis in order to provide the best tailored made services to our clients. ", link: "/"
                },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="features">

                    <SectionTitle
                        title1="Our "
                        title2="Commitment"
                        desc=""
                    />

                    <FeatureBox features={this.state.features} />

                </section>
            </React.Fragment>
        );
    }
}

export default Features;