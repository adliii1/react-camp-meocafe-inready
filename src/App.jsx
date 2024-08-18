import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import { useEffect } from "react";
import { useAuth } from "./hooks/useAuth";

function App() {
	// const { user } = useAuth();
	// const navigate = useNavigate();
	// useEffect(() => {
	// 	if (user) {
	// 		navigate("/dashboard");
	// 	} else {
	// 		navigate("/login");	
	// 	}
	// }, [user, navigate]);
	return (
		<div>
			<Layout>
				<Outlet />
			</Layout>
		</div>
	);
}

export default App;
