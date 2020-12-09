import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export function StudentForm(props) {
	const [name, setName] = useState("");
	const [course, setCourse] = useState("");

	const { store, actions } = useContext(Context);

	let handleSubmit = e => { //e.target
        e.preventDefault();
        // let formdata = e.target;
        // actions.createQuote(formdata); formdata.name, formdata.course
		actions.addStudent(name, course);
		setName("");
		setCourse("");
	};

	return (
		<div className="text-center mt-5">
			<form onSubmit={handleSubmit}>
				<h2>Register new student</h2>
				<input
					type="text"
					className="input"
                    value={name}
                    name="id"
					placeholder="Student name"
					required
					onChange={e => setName(e.target.value)}
				/>
				<input
					type="number"
					className="input"
					value={course}
					placeholder="Class ID"
					required
					onChange={e => setCourse(e.target.value)}
				/>
				<input type="submit" value="submit" />
			</form>
		</div>
	);
}
