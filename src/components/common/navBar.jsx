import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
<<<<<<< HEAD
    const { active } = props;

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="nav-background">
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
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
=======
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "achievements"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/achievements">Achievements</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
>>>>>>> 2d1200ff66f6a16b527f9a18366a13498bee551c
};

export default NavBar;
