import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "projects");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Projects | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="projects" />
                <div className="content-wrapper">
                    <div className="projects-logo-container">
                        <div className="projects-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="projects-container">
                        <div className="title projects-title">
                            Things I’ve made trying to put my dent in the
                            universe.
                        </div>

                        <div className="subtitle projects-subtitle">
                            I've worked on a variety of projects over the years
                            and I'm proud of the progress I've made. Many of
                            these projects are industrial-based, which helped me work on real-life applications,
                            enhancing my knowledge. I love collaborating with others, so if you are
                            looking for a helping hand, please feel free to reach out! Learning and growing through collaboration
                            is exciting, and I'm always open to new ideas and
                            feedback.
                        </div>

                        <div className="projects-list">
                            <AllProjects />
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Projects;
