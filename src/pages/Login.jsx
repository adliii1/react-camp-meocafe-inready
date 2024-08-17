import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { login } = useAuth();
	const [data, setData] = useState();

	const navigate = useNavigate();
	const handleChange = (event) => {
		setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		login(data).then(() => navigate("/"));
	};

	return (
		<div className="h-screen bg-primary">
			<div className="bg-[url('../assets/authBg.png')] h-full bg-center bg-no-repeat flex justify-center items-center">
				<div className="bg-white rounded-3xl min-w-[500px] py-[50px] px-[57px] flex flex-col text-center text-[#202224] font-semibold">
					<p className="font-bold text-3xl">Login to Account</p>
					<p className="mt-6">
						Please enter your email and password to continue
					</p>
					<form id="form" action="" className="mt-9">
						<div className="flex flex-col text-left">
							<label htmlFor="email">Email Address</label>
							<input
								onChange={handleChange}
								name="email"
								// type="email"
								className="mt-4 bg-[#F1F4F9] p-2 border-[#D8D8D8] border rounded-lg text-[#A6A6A6] outline-none"
								id="email"
								required
							/>
						</div>
						<div className="flex flex-col text-left mt-10">
							<div className="flex justify-between">
								<label htmlFor="password">Password</label>
								<a href="">Forget Password?</a>
							</div>
							<input
								onChange={handleChange}
								type="password"
								name="password"
								className="mt-4 bg-[#F1F4F9] p-2 border-[#D8D8D8] border rounded-lg text-[#A6A6A6] outline-none"
								id="password"
								required
							/>
						</div>
						<div className="flex mt-6">
							<input
								className="inline-block"
								type="checkbox"
								id="remember-me"
							/>
							<label htmlFor="remember-me" className="inline-block ml-3">
								Remember me
							</label>
						</div>
					</form>
					<button
						form="form"
						type="submit"
						className="bg-primary inline py-3 font-bold text-white rounded-lg mt-10"
						onClick={handleSubmit}
					>
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
