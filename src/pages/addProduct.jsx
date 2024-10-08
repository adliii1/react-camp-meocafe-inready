import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AddProduct = () => {
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [imgLink, setImgLink] = useState("");
	const [rate, setRate] = useState(0);
	const [count, setCount] = useState(0);

	const sendData = async () => {
		try {
			const response = await axios.post('http://localhost:8000/products', {
				title: title,
				category: category,
				price: price,
				description: description,
				image: imgLink,
				rating: {
					rate: rate,
					count: count,
				}
			});

			console.log(response.data);

			if (response.status === 200) {
				Navigate('/products')
			} else {
				console.log("gagal")
			}

		} catch (err) {
			console.error(err.message);
		}
	}

	return (
		<>
			<div className="flex justify-between items-center">
				<p className="text-3xl font-bold">Add Products</p>
				<div className="flex gap-2">
					<Button
						onClick={sendData}
					>
						<a href="">
							<p className="-mb-[2px]">Add</p>
						</a>
					</Button>
					<Button variant="danger">
						<a href="">
							<p className="-mb-[2px]">Delete</p>
						</a>
					</Button>
				</div>
			</div>

			<form
				id="form"
				method="post"
				action="./addProduct.html"
				className="mt-7 grid grid-cols-5 gap-x-8 text-md font-semibold"
			>
				<div className="col-span-3 bg-white px-8 py-6 flex flex-col gap-6 rounded-lg border border-borderPrimary">
					<div className="flex flex-col gap-3">
						<label htmlFor="product_name">Product Name</label>
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							type="text"
							id="product_name"
							name="product_name"
							placeholder="Input product name"
							className="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label htmlFor="kategori">Kategori</label>
						<input
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							type="text"
							id="kategori"
							name="kategori"
							placeholder="Input kategori"
							className="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label htmlFor="price">Price</label>
						<input
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							type="number"
							id="price"
							name="price"
							placeholder="Input price"
							className="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label htmlFor="deskripsi">Deskripsi</label>
						<input
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							type="text"
							id="deskripsi"
							name="deskripsi"
							placeholder="Input deskripsi"
							className="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label htmlFor="gambar">Gambar</label>
						<input
							value={imgLink}
							onChange={(e) => setImgLink(e.target.value)}
							type="text"
							id="gambar"
							name="gambar"
							placeholder="URL gambar"
							className="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label htmlFor="rate">Rate</label>
						<input
							value={rate}
							onChange={(e) => setRate(e.target.value)}
							type="number"
							id="rate"
							name="rate"
							placeholder="Input rate"
							className="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
						/>
					</div><div className="flex flex-col gap-3">
						<label htmlFor="stok">Stok</label>
						<input
							value={count}
							onChange={(e) => setCount(e.target.value)}
							type="number"
							id="stok"
							name="stok"
							placeholder="Input stok"
							className="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
						/>
					</div>
				</div>
				<section className="col-span-2 bg-white py-6 h-fit rounded-lg border border-borderPrimary">
					<p className="font-bold text-lg px-8">Product Image</p>
					<div className="h-[1px] border-b border-b-borderPrimary w-full my-4"></div>
					<div className="px-4">
						<label
							htmlFor="image-upload"
							id="drag-area"
							className="w-full h-[280px] bg-backgroundPrimary border-2 border-[#D9D9D9] border-dashed rounded-lg overflow-hidden cursor-pointer flex justify-center items-center"
						>
							<input
								id="image-upload"
								name="image"
								type="file"
								hidden
								accept="image/*"
							/>
							<div
								id="image-viewer"
								className="w-full h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center"
							>
								<img src="../assets/imagePlaceholder.png" alt="" />
								<p className="text-[18px]">
									Tarik dan lepas atau
									<span className="text-primary">pilih gambar</span>
								</p>
								<p className="text-base text-black/25">
									Mendukung JPG, JPEG, dan PNG
								</p>
							</div>
						</label>
					</div>
				</section>
			</form>
		</>
	);
};

export default AddProduct;