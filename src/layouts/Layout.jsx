import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
	return (
		<div className="flex w-full">
			<Sidebar />
			<div className="ml-[240px] flex w-full relative">
				<Navbar />
				<main className="p-7 bg-backgroundPrimary min-h-screen w-full mt-[70px]">
					{children}
				</main>
			</div>
		</div>
	);
};

export default Layout;
