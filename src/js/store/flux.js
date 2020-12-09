const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			students: [
				{
					id: 1,
					name: "Daniel",
					classID: 1
				},
				{
					id: 2,
					name: "Chris",
					classID: 1
				},
				{
					id: 3,
					name: "Alejandro",
					classID: 2
				}
			],
			classes: [
				{
					id: 1,
					name: "Full-Stack Part-Time",
					desc: "full stack course in 14 weeks",
					roster: [1, 2]
				},
				{
					id: 2,
					name: "Full-Stack Full-Time",
					desc: "full stack course in 8 weeks",
					roster: [3]
				}
			],
			loggedIn: false
		},
		actions: {
			getStudents: () => {
				return getStore().students;
			},
			getStudent: id => {
				const students = getStore().students;
				id = parseInt(id);
				let student = {};

				students.forEach(element => {
					if (id === element.ID) {
						student = element;
					}
				});

				return student;
			},
			addStudent: (name, course) => {
				// create the remote student
				let newStudent = { name: name, course: course };
				let studentCopy = newStudent;
				// let id = getActions().addRemoteStudent(newStudent);
				let url =
					"https://8080-a361e243-5f81-49c3-a776-0f1e05f91c93.ws-us02.gitpod.io/wp-json/sample_api/v1/student";
				fetch(url, {
					method: "post",
					body: JSON.stringify(studentCopy)
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
						let id = jsonResponse;
						//get the store
						let store = getStore();
						newStudent.ID = id;
						store.students = [...store.students, newStudent];

						// add new student into the corresponding course
						let actions = getActions();
						let c = actions.getClass(course);
						c.roster = [...c.roster, parseInt(newStudent.ID)];

						// update the store
						setStore(store);
						console.log(store);
					})
					.catch(error => {
						// handle the error
						console.log(error);
					});
			},
			getClasses: () => {
				return getStore().classes;
			},
			getClass: id => {
				const classes = getStore().classes;
				id = parseInt(id);
				let course = {};

				classes.forEach(element => {
					if (id === element.ID) {
						course = element;
					}
				});

				return course;
			},
			loadSomeData: () => {
				let url =
					"https://8080-a361e243-5f81-49c3-a776-0f1e05f91c93.ws-us02.gitpod.io/wp-json/sample_api/v1/alldata";
				fetch(url)
					.then(response => {
						// handle the response
						if (response.status === 200) {
							// console.log(response.json());
							return response.json();
						}
					})
					.then(jsonResponse => {
						// console.log(jsonResponse);
						let store = getStore();
						store.students = jsonResponse.students;

						// convert roster from string to array of nums
						jsonResponse.courses.forEach(course => {
							// console.log(course);
							// split the string
							course.roster = course.roster.split(",");
							// convert each to num
							course.roster = course.roster.map(num => parseInt(num));
							// console.log(course);
						});
						store.classes = jsonResponse.courses;
						setStore(store);
						console.log(store);
					})
					.catch(error => {
						// handle the error
						console.log(error);
					});
			},
			addRemoteStudent: student => {}
		}
	};
};

export default getState;
