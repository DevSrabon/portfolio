import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Blogs from "../Pages/Home/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/Projects/Details";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/:id",
				element: <Details />,
				loader:({ params }) =>params.id
			},
			{
				path: "/blogs",
				element: <Blogs />,
			},
		],
	},
]);