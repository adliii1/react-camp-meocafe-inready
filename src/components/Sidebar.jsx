import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
	};
	return (
		<aside className="py-6 w-[240px] bg-white h-screen fixed">
			<div className="flex h-full items-center justify-between flex-col w-ful	l">
				<div className="w-full text-center">
					<p className="font-extrabold text-lg">
						<span className="text-primary">Meow</span>Cafe
					</p>
					<section className="mt-8 flex flex-col">
						<div className="relative px-6">
							<NavLink
								className="p-3 items-center flex w-full rounded-md"
								to="/dashboard"
							>
								<div className="bg-primary absolute rounded-e-lg top-0 left-0 h-full w-1 hidden"></div>
								<i className="ri-dashboard-line mr-4 text-lg"></i>
								<span className="font-semibold">Dashboard</span>
							</NavLink>
						</div>
						<div className="relative px-6">
							<NavLink
								className="p-3 items-center flex w-full rounded-md"
								to="/products"
							>
								<div className="bg-primary absolute rounded-e-lg top-0 left-0 h-full w-1 hidden"></div>
								<i className="ri-microsoft-line mr-4 text-lg"></i>
								<span className="font-semibold">Products</span>
							</NavLink>
						</div>
					</section>
					<div className="h-[1px] bg-[#E0E0E0] w-full my-4"></div>
					<section>
						<div className="w-full px-4 mb-4">
							<span className="px-4 uppercase text-[#202224] font-bold text-sm w-full flex">
								Pages
							</span>
						</div>
						<div className="relative px-6">
							<NavLink
								className="p-3 items-center flex w-full rounded-md"
								to="/orders"
							>
								<div className="bg-primary absolute rounded-e-lg top-0 left-0 h-full w-1 hidden"></div>
								<i className="ri-clipboard-line mr-4 text-lg"></i>
								<span className="font-semibold">Orders</span>
							</NavLink>
						</div>
					</section>
				</div>
				<div className="w-full px-6">
					<button
						className="p-3 flex w-full items-center rounded-md"
						onClick={handleLogout}
					>
						<i className="ri-logout-circle-line mr-4 text-lg"></i>
						<span className="font-semibold">Logout</span>
					</button>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
