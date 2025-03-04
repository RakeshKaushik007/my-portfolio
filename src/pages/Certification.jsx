import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/Certification.css";

const Certification = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "certification") || {};

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Certification | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description || "Default description"} />
                <meta name="keywords" content={(currentSEO.keywords || []).join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active="certification" />
                <div className="content-wrapper">
                    <div className="certification-logo-container">
                        <div className="certification-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="certification-container">
                        <div className="certification-main">
                            <div className="certification-right-side">
                                <div className="title certification-title">
                                    {INFO.certification?.title || "My Certifications"}
                                </div>

                                <div className="subtitle certification-subtitle">
                                    {INFO.certification?.description || "Here are some of my certifications and achievements."}
                                </div>

                                <h2><strong>Internships</strong></h2>
                                <ul>
                                    <li>
                                        <strong>Software Engineer Intern at Eastman and Auto Power Limited</strong><br />
                                        July 2023 - January 2024<br />
                                        Contributed to software development projects and optimized existing systems.
                                        <div className="internship-image-container">
                                            <img
                                                src="eastman internship completioin letter.jpeg"
                                                alt="internship1"
                                                className="certification-image"
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <strong>Data Science Intern at Blackcoffer</strong><br />
                                        January 2024 - April 2024<br />
                                        Analyzed large datasets and developed data-driven solutions to business problems.
                                        <div className="internship-image-container">
                                            <img
                                                src="Rakesh- blackcoffer internship completion certificate Certificate_page-0001.jpg"
                                                alt="internship2"
                                                className="certification-image"
                                            />
                                        </div>
                                    </li>
                                </ul>

                                <h2><strong>International Conference</strong></h2>
                                <ul>
                                    <li>
                                        <strong>Presented at The 6th International Symposium on Neuromorphic AI Hardware</strong><br />
                                        March 2024<br />
                                        Presented a paper on advancements in AI and their applications in real-world scenarios.
                                    </li>
                                </ul>

                                <div className="conference-image-container">
                                    <img
                                        src="group_photo.jpg"
                                        alt="conference_certificate1"
                                        className="certification-image"
                                    />
                                    <img
                                        src="prof.tamukoh.jpeg"
                                        alt="conference_certificate2"
                                        className="certification-image"
                                    />
                                    <img
                                        src="my conference id.jpeg"
                                        alt="conference_certificate3"
                                        className="certification-image"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="page-footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Certification;
