import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import rigo from "../../img/rigo-baby.jpg";

export function ClassProfile() {
	const { store, actions } = useContext(Context);
	// use params gives us access to the URL variable id
	let params = useParams();
	// use history gives us access to go back to the last page
	let history = useHistory();

	// get the course data
	let course = actions.getClass(params.id);
	console.log(course);

	let content = "Course not found";
	// same as -> if (Object.keys(course))
	if (Object.keys(course).length !== 0) {
		// get students
		let students = course.roster.map(id => {
			return actions.getStudent(id);
		});
		console.log(students);

		content = (
			<div>
				<h1>Course Name: {course.post_title}</h1>
				<p> course ID: {course.ID}</p>
				<p> Description: {course.description}</p>
				<h3> Roster </h3>
				{students.map((student, index) => (
					<Link
						className="btn btn-info"
						key={index}
						style={{ marginLeft: "10px" }}
						to={"/students/" + student.ID}>
						{student.name}
					</Link>
				))}

				<br />
				<button onClick={() => history.goBack()}>Go Back</button>
			</div>
		);
	}

	return <div className="text-center mt-5">{content}</div>;
}
