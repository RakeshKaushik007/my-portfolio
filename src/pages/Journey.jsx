import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
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

            <div className="journey-page">
                <NavBar active="journey" />
                <div className="journey-container">
                    <div className="journey-river">
                        <div className="journey-stage">
                            <div className="journey-circle">School</div>
                            <div className="journey-details">
                                <h2>Dehradun School</h2>
                                <p>Completed my 10th and 12th with PCM.</p>
                                <p>Participated in NSO and NMO.</p>
                                <p>Played basketball in interhouse competition.</p>
                            </div>
                        </div>

                        <div className="journey-stage">
                            <div className="journey-circle">Graduation</div>
                            <div className="journey-details">
                                <h2>Dronacharya College of Engineering</h2>
                                <p>Graduated with a B.Tech in Computer Science Engineering (2020-2024).</p>
                                <p>Participated and won in many competitions:</p>
                                <ul>
                                    <li>Secured 4th position in the NAVIKRAN fest organized by NIT Uttarakhand (2023).</li>
                                    <img
                                        src="navikran.jpeg"
                                        alt="NAVIKRAN Award Certificate"
                                        className="journey-image"
                                    />
                                    <li>Ranked within the Top 50 in the NES Award.</li>
                                    <img
                                        src="nes.jpeg"
                                        alt="NES Award Certificate"
                                        className="journey-image"
                                    />
                                    <li>Finalist in the Techigum competition conducted by L&T.</li>
                                    <img
                                        src="techgium.jpeg"
                                        alt="Techigum Competition Certificate"
                                        className="journey-image"
                                    />
                                </ul>
                                <h2>Internships</h2>
                                <p>Software Developer Intern at Eastman Auto Power Limited (July 2023 - Jan 2024).</p>
                                <img
                                    src="eastman internship completioin letter.jpeg"
                                    alt="Internship 1"
                                    className="journey-image"
                                />
                                <p>Data Science Intern at Blackcoffer (Jan 2024 - April 2024).</p>
                                <img
                                    src="Rakesh- blackcoffer internship completion certificate Certificate_page-0001.jpg"
                                    alt="Internship 2"
                                    className="journey-image"
                                />
                            </div>
                        </div>

                        <div className="journey-stage">
                            <div className="journey-circle">Post-Graduation</div>
                            <div className="journey-details">
                                <h2>Masters and Internship in Japan</h2>
                                <p>Started pursuing M.Tech in Computer Science Engineering.</p>
                                <p>Received an invitation letter from Kyutech, Japan for an internship under Prof. Hakaru Tamukoh in AI, ML, and Robotics.</p>
                                <img
                                    src="Invitation Letter-Rakesh.jpg"
                                    alt="Kyutech Invitation Letter"
                                    className="journey-image"
                                />
                                <img
                                    src="certification_rakesh_page-0001.jpg"
                                    alt="Prof. Hakaru Tamukoh Internship"
                                    className="journey-image"
                                />
                                <p>
                                    Attended the <b><a href="https://www.brain.kyutech.ac.jp/~neuro/2024/12/17/the-6th-international-symposium-on-neuromorphic-ai-hardware/" target="_blank" rel="noopener noreferrer">6th International Symposium on Neuromorphic AI Hardware</a></b> for 2 days.
                                </p>
                                <img
                                    src="group_photo.jpg"
                                    alt="Conference Certificate 1"
                                    className="journey-image"
                                />
                                <img
                                    src="prof.tamukoh.jpeg"
                                    alt="Conference Certificate 2"
                                    className="journey-image"
                                />
                                <img
                                    src="my conference id.jpeg"
                                    alt="Conference Certificate 3"
                                    className="journey-image"
                                />
                                <h2>Internship</h2>
                                <p>Worked on AI and robotics research under Prof. Hakaru Tamukoh.</p>
                                <img
                                    src="certification_rakesh_page-0001.jpg"
                                    alt="Master's Internship"
                                    className="journey-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-footer">
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Journey;