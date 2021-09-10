import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
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
        const projects = {
            Drivel: {
                desc: "A multi-purpose Discord bot that offers some nice features.",
                tech: "Python, SQL",
                link: "https://github.com/Daudd/Drivel-Bot",
                open: "https://dsc.gg/drivel/",
            },
            Website: {
                desc: "My personal website that shows some useless information.",
                tech: "HTML, CSS, JavaScript",
                link: "https://github.com/Daudd/Website",
                open: "https://daudd.xyz/"
            },
            aiocse: {
                desc: "An API wrapper for the Google Custom Search JSON API.",
                tech: "Python",
                link: "https://github.com/Daudd/aiocse",
                open: "https://pypi.org/project/aiocse/"
            },
        };

        return (
            <div id="projects">
                <div className="section-header ">
                    <span className="section-title">{"// projects"}</span>
                </div>

                <div className="project-container">
                    <ul className="projects-grid">
                        {Object.keys(projects).map((key, i) => (
                            <FadeInSection delay={`${i + 1}00ms`}>
                                <li className="projects-card">
                                    <div className="card-header">
                                        <div className="folder-icon">
                                            <FolderOpenRoundedIcon
                                                style={{ fontSize: 35 }}
                                            ></FolderOpenRoundedIcon>
                                        </div>
                                        <span className="external-links">
                                            <a
                                                className="github-icon"
                                                href={projects[key]["link"]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <GitHubIcon
                                                    style={{
                                                        fontSize: 20,
                                                        color: "var(--lightest-slate)",
                                                    }}
                                                ></GitHubIcon>
                                            </a>
                                            {projects[key]["open"] && (
                                                <a
                                                    className="open-icon"
                                                    href={projects[key]["open"]}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <OpenInBrowserIcon
                                                        style={{
                                                            fontSize: 25,
                                                            color: "var(--lightest-slate)",
                                                        }}
                                                    ></OpenInBrowserIcon>
                                                </a>
                                            )}
                                        </span>
                                    </div>

                                    <div className="card-title">{key}</div>
                                    <div className="card-desc">{projects[key]["desc"]}</div>
                                    <div className="card-tech">{projects[key]["tech"]}</div>
                                </li>
                            </FadeInSection>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Projects;
