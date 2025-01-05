import type { FC, ReactNode } from "react";
import Navbar from "@/components/shared/navbar";

interface Props {
	children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
	return (
		<main className="max-lg:px-4 h-full">
			<Navbar />
			<div className="flex justify-center items-center pt-20">
				<div className="flex flex-col gap-6 mt-8 w-[1000px]">{children}</div>
			</div>
		</main>
	);
};
export default Layout;
