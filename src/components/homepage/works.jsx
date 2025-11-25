import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
    const workExperiences = [
        {
            image: "./kyutechLogo.png",
            alt: "Kyutech",
            title: "Kyutech - Japan",
            subtitle: "Research Intern in AIML and Robotics",
            duration: "Jan, 25 - Apr, 25",
        },
        {
            image: "./blackcoffer 2.jpeg",
            alt: "Blackcoffer",
            title: "Blackcoffer",
            subtitle: "Data Scientist Intern",
            duration: "Jan, 24 - April, 24",
        },
        {
            image: "./eastman 2.png",
            alt: "Eastman",
            title: "Eastman and Auto Power Limited",
            subtitle: "Software Developer Intern",
            duration: "July, 23 - Jan, 24",
        },
    ];

    return (
        <div className="works">
            <Card
                icon={faBriefcase}
                title="Work"
                body={
                    <div className="works-body">
                        {workExperiences.map((work, index) => (
                            <div className="work" key={index}>
                                <img src={work.image} alt={work.alt} className="work-image" />
                                <div className="work-details">
                                    <div className="work-title">{work.title}</div>
                                    <div className="work-info">
                                        <div className="work-subtitle">{work.subtitle}</div>
                                        <div className="work-duration">{work.duration}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            />
        </div>
    );
};

export default Works;
