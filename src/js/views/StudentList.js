import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { StudentCard } from "../component/StudentCard.js";
import { StudentForm } from "../component/StudentForm.js";
import { Context } from "../store/appContext";

//create your first component
export function StudentList() {
	const { store, actions } = useContext(Context);
	let test = "";
	// console.log(actions.getStudents());

	let isAuth = sessionStorage.getItem("loggedIn");

	if (isAuth == "true") {
		if (store.students.length == 0) {
			test = "nothing to show";
		} else {
			test = (
				<div className="row">
					{store.students.map((student, index) => (
						<StudentCard key={index} student={student} />
					))}
				</div>
			);
		}
	} else {
		location.replace("https://3000-bcf793bd-57f1-46d2-922e-9bd5dbb543f2.ws-us02.gitpod.io/login");
	}

	return (
		<div className="text-center mt-5">
			<div className="row">
				<StudentForm />
			</div>
			{test}
		</div>
	);
}
