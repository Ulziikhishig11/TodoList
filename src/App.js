import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import Login from "./Login";
import TodoList from "./TodoList";

const App = () => {
	const [state, setState] = useState({ user: null });

	useEffect(() => {
		const subscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setState({ user });
			} else {
				setState({ user: null });
			}
			console.log(user);
		});
		return () => subscribe();
	}, []);

	return <div>{!state.user ? <TodoList user={state.user} /> : <Login />}</div>;
};

export default App;
