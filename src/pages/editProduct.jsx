import { useParams } from "react-router-dom";

const EditProduct = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<>
			<div className="flex justify-between items-center">
				<p className="text-3xl font-bold">Edit Products</p>
				<div className="flex gap-2">
					<button
						type="submit"
						form="form"
						className="bg-primary text-white font-bold h-full text-base w-36 inline-flex py-3 rounded-md justify-center"
					>
						<p className="-mb-[2px]">Add</p>
					</button>
					<a
						href=""
						className="bg-red-500 text-white font-bold h-full text-base w-36 inline-flex py-3 rounded-md justify-center"
					>
						<p className="-mb-[2px]">Delete</p>
					</a>
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
							type="text"
							id="product_name"
							name="product_name"
							placeholder="Input product name"
							className="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
						/>
					</div>
					<div>
						<fieldset className="flex flex-col gap-3">
							<p>Category</p>
							<div className="flex gap-1">
								<div>
									<input
										type="radio"
										name="category"
										id="food"
										className="hidden peer"
										value="food"
									/>
									<label
										role="button"
										htmlFor="food"
										tabIndex="0"
										className="peer-checked:text-white bg-[#D9D9D9] peer-checked:bg-primary px-6 py-2 text-base rounded-s-md"
									>
										Food
									</label>
								</div>
								<div>
									<input
										type="radio"
										name="category"
										id="drink"
										className="hidden peer"
										value="drink"
									/>
									<label
										role="button"
										htmlFor="drink"
										tabIndex="0"
										className="peer-checked:text-white bg-[#D9D9D9] peer-checked:bg-primary px-6 py-2 text-base rounded-e-md"
									>
										Drink
									</label>
								</div>
							</div>
						</fieldset>
					</div>
					<div className="flex flex-col gap-3">
						<label htmlFor="price">Price</label>
						<input
							type="text"
							id="price"
							name="price"
							placeholder="Input price"
							className="px-5 py-2 border-borderPrimary border bg-backgroundPrimary rounded-md"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label htmlFor="stock">Stock</label>
						<input
							type="text"
							id="stock"
							name="stock"
							placeholder="Input stock"
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

export default EditProduct;
