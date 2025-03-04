import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
    const { active } = props;

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className={active === "home" ? "nav-item active" : "nav-item"}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={active === "about" ? "nav-item active" : "nav-item"}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className={active === "projects" ? "nav-item active" : "nav-item"}>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li className={active === "achievements" ? "nav-item active" : "nav-item"}>
                            <Link to="/achievements">Achievements</Link>
                        </li>
                        <li className={active === "contact" ? "nav-item active" : "nav-item"}>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className={active === "certification" ? "nav-item active" : "nav-item"}>
                            <Link to="/certification">Certification</Link>
                        </li>
                        <li className={active === "journey" ? "nav-item active" : "nav-item"}>
                            <Link to="/journey">Journey</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default NavBar;
