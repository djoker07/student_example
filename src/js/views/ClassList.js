import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { ClassCard } from "../component/ClassCard.js";
import { Context } from "../store/appContext";

//create your first component
export function ClassList() {
	const { store, actions } = useContext(Context);
	let test = "";

	if (store.classes.length == 0) {
		test = "nothing to show";
	} else {
		test = (
			<div className="row">
				{store.classes.map((course, index) => (
					<ClassCard key={index} course={course} />
				))}
			</div>
		);
	}

	return <div className="text-center mt-5">{test}</div>;
}
