import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
    return (
        <div className="works">
            <Card
                icon={faBriefcase}
                title="Work"
                body={
                    <div className="works-body">
                        <div className="work">
                            <img
                                src="./eastman.png"
                                alt="Eastman"
                                className="work-image"
                            />
                            <div className="work-title">Eastman</div>
                            <div className="work-subtitle">
                                Software Developer
                            </div>
                            <div className="work-duration">July, 23 - Jan, 24</div>
                        </div>

                        <div className="work">
                            <img
                                src="./Blackcoffer.png"
                                alt="Blackcoffer"
                                className="work-image"
                            />
                            <div className="work-title">Blackcoffer</div>
                            <div className="work-subtitle">
                                Data Scientist
                            </div>
                            <div className="work-duration">Jan, 24 - April, 24</div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Works;

