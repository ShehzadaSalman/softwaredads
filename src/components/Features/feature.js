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
                    desc: "", link: "/"
                },
                {
                    id: 2, img: feature2, icon: "mdi  mdi-account-group", title: "Team Management",
                    desc: "", link: "/"
                },
                {
                    id: 3, img: feature3, icon: "mdi  mdi-chart-bell-curve", title: "Marketing Analysis",
                    desc: "", link: "/"
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
                        desc="lorem ipsum dolor"
                    />

                    <FeatureBox features={this.state.features} />

                </section>
            </React.Fragment>
        );
    }
}

export default Features;