import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import logo from "../images/logo.png";

import "./Nav.css";

const Nav = () => {
	return (
		<div className="nav-bar">
			<div className="logo">
				<img src={logo} alt="logo" />
				<h1>LOGO.COM</h1>
			</div>

			<div className="buttons">
				<button className="pages">Home</button>
				<button className="pages">Properties</button>
				<button className="pages">Agents</button>
				<button className="pages">Blog</button>

				<button id="login">Login</button>
				<button id="hamburger">
					<GiHamburgerMenu
						style={{
							"font-size": "2rem",
							color: "#007882",
							"vertical-align": "middle",
						}}
					/>
				</button>
			</div>
		</div>
	);
};

export default Nav;
