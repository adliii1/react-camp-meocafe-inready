import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/Products";
import App from "./App";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/404";
import EditProduct from "./pages/editProduct";
import AddProduct from "./pages/addProduct";
import Login from "./pages/Login";
import { AuthProvider } from "./providers/AuthProvider";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing />,
	},
	{
		element: <ProtectedLayout />,
		children: [
			{
				element: <App />,
				children: [
					{
						path: "dashboard",
						element: <Dashboard />,
					},
					{
						path: "products",
						children: [
							{
								path: "",
								element: <Products />,
							},
							{
								path: "addProduct",
								element: <AddProduct />,
							},
							{
								path: "editProduct/:id",
								element: <EditProduct />,
							},
						],
					},
					{
						path: "orders",
						element: <Orders />,
					},
				],
			},
		],
	},
	// {
	// 	path: "/playground",
	// 	element: <Playground />,
	// },
	{
		path: "login",
		element: <Login />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
