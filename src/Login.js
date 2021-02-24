import React from "react";
import { auth } from "./firebase";
import { Button, Form, Card } from "react-bootstrap";

const signin = async () => {
	try {
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		auth.signInWithEmailAndPassword(email, password);
		console.log("logged in");
	} catch (err) {
		console.log(err);
	}
};

const signup = async () => {
	try {
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		auth.createUserWithEmailAndPassword(email, password);
		window.alert("user created");
	} catch (err) {
		console.log(err);
	}
};

function Login() {
	return (
		<div
			class="row h-100 justify-content-center"
			style={{ margin: "100px" }}
		>
			<Card style={{ maxWidth: "400px" }}>
				<Card.Body>
					<h2 className="text-center mb-4">Todo-list</h2>
					<h3 className="text-center mb-4">Login</h3>
					<Form>
						<Form.Label>Email</Form.Label>
						<Form.Control
							placeholder="email"
							type="email"
							id="email"
						/>
						<Form.Label>Password</Form.Label>
						<Form.Control
							placeholder="password"
							type="password"
							id="password"
						/>
						<Button style={{ margin: "10px" }} onClick={signin}>
							Sign-in
						</Button>
						<Button style={{ margin: "10px" }} onClick={signup}>
							Sign-up
						</Button>
						{/* <TodoList/> */}
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Login;
