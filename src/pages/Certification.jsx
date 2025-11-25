import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/Certification.css";

const ImageWithModal = ({ src, alt }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            {/* Thumbnail Image */}
            <img
                src={src}
                alt={alt}
                className="certification-image"
                onClick={() => setModalOpen(true)}
            />

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-container" onClick={() => setModalOpen(false)}>
                    <div className="modal-content">
                        <img
                            src={src}
                            alt={alt}
                            className="modal-image zoom-effect" // Added zoom effect class
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

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
                                            <ImageWithModal
                                                src="eastman internship completioin letter.jpeg"
                                                alt="Software Engineer Internship Certificate"
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <strong>Data Science Intern at Blackcoffer</strong><br />
                                        January 2024 - April 2024<br />
                                        Analyzed large datasets and developed data-driven solutions to business problems.
                                        <div className="internship-image-container">
                                            <ImageWithModal
                                                src="Rakesh- blackcoffer internship completion certificate Certificate_page-0001.jpg"
                                                alt="Data Science Internship Certificate"
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
                                    <ImageWithModal
                                        src="group_photo.jpg"
                                        alt="Group Photo at the Conference"
                                    />
                                    <ImageWithModal
                                        src="prof.tamukoh.jpeg"
                                        alt="Photo with Professor Tamukoh"
                                    />
                                    <ImageWithModal
                                        src="my conference id.jpeg"
                                        alt="Conference ID Card"
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
