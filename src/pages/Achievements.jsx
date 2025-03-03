import React from "react";
import "./Achievements.css"; // Import the CSS file
import NavBar from "../components/common/navBar";

// Ensure you replace `path/to/your/image.jpg` with the actual path or URL to your images
const Achievements = () => {
    return (
        <div className="achievements-container">
            <NavBar active="achievements" />
            <h1 className="achievements-title title">Achievements</h1>
            <ul className="achievements-list">
                <li className="achievement-item">
                    <p>Secured 4th position in the <strong>NAVIKRAN</strong> fest organized by NIT Uttarakhand (2023).</p>
                    <img src="navikran.jpeg" alt="NAVIKRAN Fest Certificate" className="achievement-image" />
                </li>
                <li className="achievement-item">
                    <p>Ranked within the <strong>Top</strong> 50 in the <strong>NES Award</strong>.</p>
                    <img src="nes.jpeg" alt="NES Award Certificate" className="achievement-image" />
                </li>
                <li className="achievement-item">
                    <p><strong>Finalist</strong> in the <strong>Techigum</strong> competition conducted by <strong>L&T</strong>.</p>
                    <img src="techgium.jpeg" alt="Techigum Certificate" className="achievement-image" />
                </li>
            </ul>
        </div>
    );
};

export default Achievements;
