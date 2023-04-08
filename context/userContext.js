import { createContext, useContext, useState } from "react";
import { registerNewUser, loginUser } from "../config/firebase";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState(null);

	async function handleRegister(email, password) {
		try {
			const newUser = await registerNewUser(email, password);

			if (
				newUser !== undefined &&
				newUser !== "Firebase: Error (auth/invalid-email)." &&
				newUser !==
					"Firebase: Password should be at least 6 characters (auth/weak-password)." &&
				newUser !== "Firebase: Error (auth/email-already-in-use)."
			) {
				setLoggedIn(true);
				setUser(newUser);
			}
		} catch (err) {
			console.error(err);
		}
	}

	async function handleLogin(email, password) {
		try {
			const loggedInUser = await loginUser(email, password);
			console.log("🚀 ~ file: userContext.js:30 ~ handleLogin ~ user:", loggedInUser);

			if (
				loggedInUser !== undefined &&
				loggedInUser !== "Firebase: Error (auth/invalid-email)."
			) {
				setLoggedIn(true);
				setUser(loggedInUser);
			}
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<UserContext.Provider value={{ handleRegister, handleLogin, isLoggedIn }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
