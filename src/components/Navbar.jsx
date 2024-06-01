const Navbar = () => {
	return (
		<nav className="h-[70px] flex py-4 px-7 justify-between items-center flex-grow fixed bg-white left-[240px] right-0">
			<input
				type="text"
				name=""
				id=""
				placeholder="Search"
				className="px-4 w-96 h-full py-2 bg-[#F5F6FA] rounded-3xl border border-[#D5D5D5]"
			/>
			<div className="flex gap-5 items-center h-full">
				<div className="overflow-hidden h-full aspect-square rounded-full object-center">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5r7mceg1cqsh7ZBtZYXjQUwXxjqTXV4qjHWC5Xf3_g&s"
						alt=""
						className="w-full"
					/>
				</div>
				<div>
					<p className="font-bold text-[#404040]">Imank</p>
					<p className="text-sm font-semibold text-[#565656]">イマン</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
