import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1",
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey,
        });
    }

    render() {
        const about = (
            <p>
                My name is <b>Daud</b> and I'm based in <b>Indonesia</b>.
                I'm currently a student who does literally nothing useful in life.
            </p>
        );
        const tech = ["Python", "JavaScript", "SQL", "Rust"];

        return (
            <div id="about">
                <FadeInSection>
                    <div className="section-header">
                        <span className="section-title">{"// about me"}</span>
                    </div>
                    <div className="about-content">
                        <div className="about-description">
                            {about}
                            Here are some technologies I have been trying to understand:
                            <ul className="tech-stack">
                                {tech.map(function (tech_item, i) {
                                    return (
                                        <FadeInSection delay={`${i + 1}00ms`}>
                                            <li>{tech_item}</li>
                                        </FadeInSection>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

export default About;