import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const Landing = () => {
	const { user } = useAuth();
	const navigate = useNavigate();
	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		} else {
			navigate("/login");
		}
	}, [user, navigate]);
};

export default Landing;
