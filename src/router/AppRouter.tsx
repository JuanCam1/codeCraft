import {
	createHashRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import HomePage from "@/page/home/HomePage";
import Hooks from "@/page/blogs/react/Hooks";
import PageReact from "@/page/blogs/react/Page";

const AppRouter = () => {
	const routerApp = createHashRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<HomePage />} />
				<Route path="react" element={<PageReact />}>
					<Route path="hooks" element={<Hooks />} />
				</Route>
			</>,
		),
	);

	return <RouterProvider router={routerApp} />;
};
export default AppRouter;
