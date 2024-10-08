import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
  				const respons = await axios.get("http://localhost:8000/products");
				setData(respons.data);
			} catch (error) {
				setError(error.message)
			}
		}

		fetchData();
	}, [data])

	const deleteData = async (id) => {
		try {
			const response = await axios.delete(`http://localhost:8000/products/${id}`);
				location.reload();
		} catch (err) {
			setError(err.message);
		}
	}

	return (
		<>
			<div className="flex justify-between items-center">
				<p className="text-3xl font-bold">Products</p>
				<Button>
					<Link to="addProduct">
						<p className="-mb-[2px]">Add</p>
					</Link>
				</Button>
			</div>
			<div className="mt-7 border border-borderPrimary rounded-xl bg-white">
				<table className="w-full table-fixed">
					<thead className="text-left">
						<tr className="border-b border-borderPrimary">
							<th className="w-2/12 text-center py-4">Image</th>
							<th className="w-3/12">Product Name</th>
							<th className="w-3/12">Category</th>
							<th className="w-3/12">Price</th>
							<th className="w-3/12">Stock</th>
							<th className="w-2/12">Action</th>
						</tr>
					</thead>
					<tbody className="table-row-group font-semibold">
						{data.map((e) => (
							<tr key={e.id} className="border-borderPrimary border-b">
								<td className="py-6 flex justify-center">
									<div className="w-14 overflow-hidden rounded-xl">
										<img
											src={e.image}
											alt=""
										/>
									</div>
								</td>
								<td>{e.title}</td>
								<td>{e.category}</td>
								<td>Rp. {e.price}</td>
								<td>{e.rating.count}</td>
								<td className="h-full">
									<div className="inline-flex rounded-lg font-normal bg-[#FAFBFD] border border-borderPrimary">
										<Link
											to="editProduct/123"
											className="py-2 px-4 text-black"
											aria-label="edit"
										>
											<i className="ri-edit-box-line"></i>
										</Link>
										<div className="w-[1px] border-borderPrimary h-10"></div>
										<button className="py-2 px-4 text-error" onClick={() => deleteData(e.id)} aria-label="delete">
											<i className="ri-delete-bin-line"></i>
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Products;
