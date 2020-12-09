import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import rigo from "../../img/rigo-baby.jpg";

export function StudentProfile() {
	const { store, actions } = useContext(Context);
	// use params gives us access to the URL variable id
	let params = useParams();

	// use history gives us access to go back to the last page
	let history = useHistory();

	let student = actions.getStudent(params.id);
	let course = actions.getClass(student.course);
	// console.log(student);

	let content = "Student not found";
	if (Object.keys(student).length !== 0) {
		content = (
			<div>
				<h1>Student Name: {student.name}</h1>
				<p> Student ID: {student.ID}</p>
				<Link style={{ marginLeft: "10px" }} to={"/courses/" + course.ID}>
					Registerd in: {course.post_title}
				</Link>
				<br />
				<button onClick={() => history.goBack()}>Go Back</button>
			</div>
		);
	}

	return <div className="text-center mt-5">{content}</div>;
}
