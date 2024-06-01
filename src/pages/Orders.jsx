const Orders = () => {
	return (
		<>
			<p className="text-3xl font-bold">Orders</p>
			<div className="mt-7 border border-borderPrimary rounded-xl bg-white">
				<table className="w-full">
					<thead className="text-left">
						<tr className="border-b border-borderPrimary">
							<th className="pl-8 py-4">ID</th>
							<th className="">Name</th>
							<th className="">Product</th>
							<th className="">Category</th>
							<th className="">Price</th>
							<th className="">Status</th>
							<th className="">Action</th>
						</tr>
					</thead>
					<tbody className="table-row-group font-semibold">
						<tr className="border-b-borborder-borderPrimary border-b">
							<td className="pl-8 py-6">00001</td>
							<td>Christine Brooks</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>
								<div
									className="data-complete:bg-success/20 rounded data-complete:text-success px-4 py-[4px] inline-block data-processing:bg-purple/20 data-processing:text-purple"
									data-status="complete"
								>
									Completed
								</div>
							</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg bg-[#FAFBFD] border border-borderPrimary">
									<button className="py-2 px-4 text-black">
										<i className="ri-check-line"></i>
									</button>
								</div>
							</td>
						</tr>
						<tr className="border-b-borborder-borderPrimary border-b">
							<td className="pl-8 py-6">00001</td>
							<td>Christine Brooks</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>
								<div
									className="data-complete:bg-success/20 rounded data-complete:text-success px-4 py-[4px] inline-block data-processing:bg-purple/20 data-processing:text-purple"
									data-status="processing"
								>
									Processing
								</div>
							</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg bg-[#FAFBFD] border border-borderPrimary">
									<button className="py-2 px-4 text-black">
										<i className="ri-check-line"></i>
									</button>
								</div>
							</td>
						</tr>
						<tr className="border-b-borborder-borderPrimary border-b">
							<td className="pl-8 py-6">00001</td>
							<td>Christine Brooks</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>
								<div
									className="data-complete:bg-success/20 rounded data-complete:text-success px-4 py-[4px] inline-block data-processing:bg-purple/20 data-processing:text-purple"
									data-status="complete"
								>
									Completed
								</div>
							</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg bg-[#FAFBFD] border border-borderPrimary">
									<button className="py-2 px-4 text-black">
										<i className="ri-check-line"></i>
									</button>
								</div>
							</td>
						</tr>
						<tr className="border-b-borborder-borderPrimary border-b">
							<td className="pl-8 py-6">00001</td>
							<td>Christine Brooks</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>
								<div
									className="data-complete:bg-success/20 rounded data-complete:text-success px-4 py-[4px] inline-block data-processing:bg-purple/20 data-processing:text-purple"
									data-status="processing"
								>
									Processing
								</div>
							</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg bg-[#FAFBFD] border border-borderPrimary">
									<button className="py-2 px-4 text-black">
										<i className="ri-check-line"></i>
									</button>
								</div>
							</td>
						</tr>
						<tr className="border-b-borborder-borderPrimary border-b">
							<td className="pl-8 py-6">00001</td>
							<td>Christine Brooks</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>
								<div
									className="data-complete:bg-success/20 rounded data-complete:text-success px-4 py-[4px] inline-block data-processing:bg-purple/20 data-processing:text-purple"
									data-status="complete"
								>
									Completed
								</div>
							</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg bg-[#FAFBFD] border border-borderPrimary">
									<button className="py-2 px-4 text-black">
										<i className="ri-check-line"></i>
									</button>
								</div>
							</td>
						</tr>
						<tr className="border-b-borborder-borderPrimary border-b">
							<td className="pl-8 py-6">00001</td>
							<td>Christine Brooks</td>
							<td>Fried Rice</td>
							<td>Food</td>
							<td>Rp25.000</td>
							<td>
								<div
									className="data-complete:bg-success/20 rounded data-complete:text-success px-4 py-[4px] inline-block data-processing:bg-purple/20 data-processing:text-purple"
									data-status="processing"
								>
									Processing
								</div>
							</td>
							<td className="h-full">
								<div className="inline-flex rounded-lg bg-[#FAFBFD] border border-borderPrimary">
									<button className="py-2 px-4 text-black">
										<i className="ri-check-line"></i>
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Orders;
