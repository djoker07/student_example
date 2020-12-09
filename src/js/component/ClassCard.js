import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import rigo from "../../img/rigo-baby.jpg";

//create your first component
export function ClassCard(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={rigo} className="card-img" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">Course name: {props.course.post_title}</h5>
						<p className="card-text">Course ID: {props.course.ID}</p>
						<p className="card-text">Description: {props.course.description}</p>
						<Link
							className="btn btn-info"
							style={{ marginLeft: "10px" }}
							to={"/courses/" + props.course.ID}>
							View Course
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

ClassCard.propTypes = {
	course: PropTypes.object
};
