import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { About } from "./views/about";
import { StudentList } from "./views/StudentList";
import { StudentProfile } from "./component/StudentProfile";
import { ClassList } from "./views/ClassList";
import { ClassProfile } from "./component/ClassProfile";
import { Login as LoginPage } from "./views/Login";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { CookiesProvider } from "react-cookie";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("loggedIn"));

	return (
		<div className="container">
			<CookiesProvider>
				<BrowserRouter basename={basename}>
					<Navbar isAuth={loggedIn} />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/students">
							<StudentList />
						</Route>
						<Route exact path="/students/:id">
							<StudentProfile />
						</Route>
						<Route exact path="/courses">
							<ClassList />
						</Route>
						<Route exact path="/courses/:id">
							<ClassProfile />
						</Route>
						<Route exact path="/login">
							<LoginPage />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</BrowserRouter>
			</CookiesProvider>
		</div>
	);
};

export default injectContext(Layout);
