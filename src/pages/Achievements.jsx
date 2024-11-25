import React from "react";
import "./Achievements.css"; // Import the CSS file
import NavBar from "../components/common/navBar";

const Achievements = () => {
    return (
        <div className="achievements-container">
            <NavBar active="achievements" />
            <h1 className="achievements-title title">Achievements</h1>
            <ul className="achievements-list">
                <li className="achievement-item">
                    Secured 4th position in the NAVIKRAN fest organized by NIT Uttarakhand (2023).
                </li>
                <li className="achievement-item">
                    Ranked within the Top 50 in the NES Award.
                </li>
                <li className="achievement-item">
                    Finalist in the Techigum competition conducted by L&T.
                </li>
            </ul>
        </div>
    );
};

export default Achievements;
