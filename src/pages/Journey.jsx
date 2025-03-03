import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/Journey.css";

const Journey = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "journey") || {};

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Journey | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description || "Default description"} />
                <meta name="keywords" content={(currentSEO.keywords || []).join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active="journey" />
                <div className="content-wrapper">
                    <div className="journey-logo-container">
                        <div className="journey-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="journey-container">
                        <div className="river-flow">
                            <div className="journey-section">
                                <h2>Dehradun School</h2>
                                <p>Completed my 10th and 12th with PCM.</p>
                                <p>Participated in NSO and NMO.</p>
                                <p>Played basketball in interhouse competition.</p>
                            </div>
                            <div className="arrow">➔</div>

                            <div className="journey-section">
                                <h2>Dronacharya College of Engineering</h2>
                                <p>Graduated with a B.Tech in Computer Science Engineering (2020-2024).</p>
                                <p>Participated and won in many competitions:</p>
                                <ul>
                                    <li>Secured 4th position in the NAVIKRAN fest organized by NIT Uttarakhand (2023).</li>
                                    <li>Ranked within the Top 50 in the NES Award.</li>
                                    <li>Finalist in the Techigum competition conducted by L&T.</li>
                                </ul>
                            </div>
                            <div className="arrow">➔</div>

                            <div className="journey-section">
                                <h2>Internships</h2>
                                <p>Software Developer Intern at Eastman Auto Power Limited (July 2023 - Jan 2024).</p>
                                <img src="internship1.jpeg" alt="internship1" className="journey-image" />
                                <p>Data Science Intern at Blackcoffer (Jan 2024 - April 2024).</p>
                                <img src="internship2.jpeg" alt="internship2" className="journey-image" />
                            </div>
                            <div className="arrow">➔</div>

                            <div className="journey-section">
                                <h2>Masters and Internship in Japan</h2>
                                <p>Started pursuing M.Tech in Computer Science Engineering.</p>
                                <p>Received an invitation letter from Kyutech, Japan for an internship under Prof. Hakaru Tamukoh in AI, ML, and Robotics.</p>
                                <p>Attended The 6th International Symposium on Neuromorphic AI Hardware for 2 days.</p>
                                <img src="conference_certificate1.jpeg" alt="conference_certificate1" className="journey-image" />
                                <img src="conference_certificate2.jpeg" alt="conference_certificate2" className="journey-image" />
                                <img src="conference_certificate3.jpeg" alt="conference_certificate3" className="journey-image" />
                            </div>
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

export default Journey;
