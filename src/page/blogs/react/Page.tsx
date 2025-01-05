import { Outlet } from "react-router-dom";
import Layout from "@/page/layout";

const PageReact = () => {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
};
export default PageReact;
