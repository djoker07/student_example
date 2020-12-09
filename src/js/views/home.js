import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

// import modals
import { Modal, Button } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="text-center mt-5">
			<h1> Welcome to 4 Geeks</h1>
			<div>
				<Button variant="primary" onClick={handleShow}>
					<i className="fas fa-paper-plane" />
					Launch demo modal
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo</Modal.Body>
					<Modal.Footer>
						<p>THis is a p tag</p>
						<input type="text" />
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	);
};
