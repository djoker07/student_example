import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import rigo from "../../img/rigo-baby.jpg";

//create your first component
export function StudentCard(props) {
	const { store, actions } = useContext(Context);
	let course = actions.getClass(props.student.course);
	console.log(course);

	return (
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={rigo} className="card-img" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">Student name: {props.student.name}</h5>
						<p className="card-text">Student ID: {props.student.ID}</p>
						<p className="card-text">Registered in: {course.post_title}</p>
						<Link
							className="btn btn-info"
							style={{ marginLeft: "10px" }}
							to={"/students/" + props.student.ID}>
							View Profile
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

StudentCard.propTypes = {
	student: PropTypes.object
};
