import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Navbar = props => {
	let action = "";
	console.log(props.isAuth);
	// let loggedIn = sessionStorage.getItem("loggedIn");
	if (props.isAuth !== "true") {
		action = (
			<Link className="nav-link" to="/login">
				Login
			</Link>
		);
	} else {
		action = (
			<button
				className="nav-link"
				style={{ backgroundColor: "transparent", border: "none" }}
				onClick={() => {
					sessionStorage.clear();
					location.replace("https://3000-bcf793bd-57f1-46d2-922e-9bd5dbb543f2.ws-us02.gitpod.io/");
				}}>
				Logout
			</button>
		);
	}
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/students">
								Student List
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/courses">
								Class List
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item"> {action} </li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

Navbar.propTypes = {
	isAuth: PropTypes.string
};
