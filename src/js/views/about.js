import React from "react";
import "../../styles/home.scss";
import { useCookies } from "react-cookie";

export const About = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["name"]);

	const setMyCookie = () => {
		let date = new Date();
		date.setTime(date.getTime() + 1000 * 10);
		console.log(date.toUTCString());

		setCookie("name", "Daniel", { expires: date });
	};
	const removeMyCookie = () => {
		removeCookie("name");
	};
	const getMyCookie = () => {
		console.log(cookies);
	};

	const sendRequest = () => {
		let url =
			"https://8080-a361e243-5f81-49c3-a776-0f1e05f91c93.ws-us02.gitpod.io/wp-json/sample_api/v1/sendingCookies";
		fetch(url, {
			method: "post",
			body: JSON.stringify({ user: cookies["name"] })
		})
			.then(response => {
				// handle the response
				if (response.status === 200) {
					// console.log(response.json());
					return response.json();
				}
			})
			.then(jsonResponse => {
				console.log(jsonResponse);
			})
			.catch(error => {
				// handle the error
				console.log(error);
			});
	};

	return (
		<div className="text-center mt-5">
			<h1> This is some awesome about page</h1>
			<button onClick={setMyCookie}>Set Cookie</button>
			<button onClick={removeMyCookie}>Remove Cookie</button>
			<button onClick={getMyCookie}>Get Cookie</button>
			<button onClick={sendRequest}>Send Request</button>
		</div>
	);
};
