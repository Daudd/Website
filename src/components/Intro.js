import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1",
            visible: true,
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey,
        });
    }
    render() {
        return (
            <div id="intro">
                <Typist avgTypingDelay={100}>
                    <span className="intro-title">
                        hi,
                        <span className="intro-name">{" daud "}</span>
                        here
                    </span>
                </Typist>
                <FadeInSection>
                    <div className="intro-subtitle">I am a human.</div>
                    <a
                        href="https://discord.com/users/332895085740032000" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="intro-contact"
                    >
                        My Discord
                    </a>
                </FadeInSection>
            </div>
        );
    }
}

export default Intro;
