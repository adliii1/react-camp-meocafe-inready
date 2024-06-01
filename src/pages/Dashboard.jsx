const Dashboard = () => {
	return (
		<>
			<p className="text-3xl font-bold">Dashboard</p>
			<div className="mt-7 grid grid-cols-4 gap-x-7">
				<div className="flex flex-col justify-between flex-grow w-full bg-white p-4 h-40 rounded-xl">
					<div className="inline-flex justify-between items-start">
						<div className="font-semibold">Total Drink</div>
						<div>
							<i className="ri-group-fill text-3xl bg-purple/20 text-purple p-4 rounded-3xl"></i>
						</div>
					</div>
					<div className="flex justify-between items-end">
						<div>
							<i className="ri-funds-line text-lg text-success"></i>
						</div>
						<p className="text-2xl font-bold">26</p>
					</div>
				</div>
				<div className="flex flex-col justify-between flex-grow w-full bg-white p-4 h-40 rounded-xl">
					<div className="inline-flex justify-between items-start">
						<div className="font-semibold">Total Food</div>
						<div>
							<i className="ri-line-chart-line text-3xl bg-success/20 text-success p-4 rounded-3xl"></i>
						</div>
					</div>
					<div className="flex justify-between items-end">
						<div>
							<i className="ri-funds-line text-lg text-success"></i>
						</div>
						<p className="text-2xl font-bold">10</p>
					</div>
				</div>
				<div className="flex flex-col justify-between flex-grow w-full bg-white p-4 h-40 rounded-xl">
					<div className="inline-flex justify-between items-start">
						<div className="font-semibold">Total Order</div>
						<div>
							<i className="ri-box-3-fill text-3xl bg-warning/20 text-warning p-4 rounded-3xl"></i>
						</div>
					</div>
					<div className="flex justify-between items-end">
						<div>
							<i className="ri-funds-line text-lg text-success"></i>
						</div>
						<p className="text-2xl font-bold">10293</p>
					</div>
				</div>
				<div className="flex flex-col justify-between flex-grow w-full bg-white p-4 h-40 rounded-xl">
					<div className="inline-flex justify-between items-start">
						<div className="font-semibold">Total Income</div>
						<div>
							<i className="ri-history-fill text-3xl bg-error/20 text-error p-4 rounded-3xl"></i>
						</div>
					</div>
					<div className="flex justify-between items-end">
						<div>
							<i className="ri-funds-line text-lg text-success"></i>
						</div>
						<p className="text-2xl font-bold">Rp.200.040</p>
					</div>
				</div>
			</div>
			<div className="mt-10">
				<div className="w-full h-96 bg-white px-8 py-9 rounded-xl">
					<p className="text-xl font-bold">Sales Details</p>
					<canvas id="myChart" className="w-full"></canvas>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
