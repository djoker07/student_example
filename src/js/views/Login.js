import React, { useState, useContext } from "react";
// import { Redirect } from "react-router-dom";
import "../../styles/home.scss";

import { Context } from "../store/appContext";

export const Login = () => {
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	// const [redirect, setRedirect] = useState(false);
	const { store, actions } = useContext(Context);

	// sessionStorage.clear();
	// console.log(sessionStorage);

	/*
    SESSION FUNCTIONS - SAME FOR LOCAL STORAGE
    sessionStorage.setItem(key, value)
    sessionStorage.getItem(key)
    sessionStorage.removeItem(key)
    sessionStorage.clear()
    */

	let handleSubmit = e => {
		e.preventDefault();
		if (user === "dan@email.com" && pass === "password") {
			sessionStorage.setItem("loggedIn", true);
			sessionStorage.setItem("user", user);
			renderRedirect();
		} else {
			return alert("Email and/or password wrong!");
		}
	};

	let renderRedirect = () => {
		location.replace("https://3000-bcf793bd-57f1-46d2-922e-9bd5dbb543f2.ws-us02.gitpod.io/students");
	};

	return (
		<div className="d-flex justify-content-center m-5">
			<form className="w-50" onSubmit={handleSubmit}>
				{/* input field for email */}
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Email"
						onChange={e => setUser(e.target.value)}
					/>
					<small id="emailHelp" className="form-text text-muted">
						{"We'll never share your email with anyone else."}
					</small>
				</div>
				{/* input field for password */}
				<div className="form-group">
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
						onChange={e => setPass(e.target.value)}
					/>
				</div>
				{/* submit button */}
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			{/* {renderRedirect()} */}
		</div>
	);
};
