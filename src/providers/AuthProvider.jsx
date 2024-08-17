import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(localStorage.getItem("user") || "");
	useEffect(() => {
		// Example: Check if user information is stored in cookies and update state
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(storedUser);
		}
	}, []);
	const login = async (data) => {
		const response = await axios.post(
			"https://api.escuelajs.co/api/v1/auth/login",
			data
		);
		localStorage.setItem("user", JSON.stringify(response.data.access_token));
		setUser(JSON.stringify(response.data.access_token));
	};

	const value = {
		user,
		login,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
