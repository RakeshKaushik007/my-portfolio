import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "about");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`About | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active="about" />
                <div className="content-wrapper">
                    <div className="about-logo-container">
                        <div className="about-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="about-container">
                        <div className="about-main">
                            <div className="about-right-side">
                                <div className="title about-title">
                                    {INFO.about.title}
                                </div>

                                <div className="subtitle about-subtitle">
                                    {INFO.about.description}
                                </div>

                                <h2>Education</h2>
                                <ul>
                                    <li>
                                        <strong>Master of Technology in Computer Science and Engineering</strong><br />
                                        Dronacharya College of Engineering, September 2024 – Present
                                    </li>
                                    <li>
                                        <strong>Bachelor of Technology in Computer Science and Engineering</strong><br />
                                        Dronacharya College of Engineering, Nov 2020 – July 2024<br />
                                        CGPA: 8.0
                                    </li>
                                    <li>
                                        <strong>Secondary School, Science</strong><br />
                                        The Royal College, Dehradun, April 2016 - April 2020
                                    </li>
                                </ul>
                            </div>

                            <div className="about-left-side">
                                <div className="about-image-container">
                                    <div className="about-image-wrapper">
                                        <img
                                            src="about.jpeg"
                                            alt="about"
                                            className="about-image"
                                        />
                                    </div>
                                </div>

                                <div className="about-socials">
                                    <Socials />
                                </div>
                            </div>
                        </div>
                        <div className="about-socials-mobile">
                            <Socials />
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

export default About;
