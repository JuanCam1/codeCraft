import { Link } from "react-router-dom";
import logo from "../../assets/pixelJuan.svg";
import TypographyH2 from "../ui/h2";
import Options from "./options";

const Navbar = () => {
	return (
		<nav className="top-0 z-20 fixed flex justify-center border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 max-lg:px-4 border-b w-full h-16 start-0">
			<div className="flex flex-wrap justify-between items-center mx-auto py-2 w-[1000px]">
				<Link to="/">
					<div className="flex items-center space-x-3 rtl:space-x-reverse">
						<div className="flex justify-center items-center bg-blue-200 dark:bg-blue-100 h-11 overflow-hidden">
							<img
								src={logo}
								className="h-full object-cover"
								alt="Flowbite Logo"
							/>
						</div>
						<TypographyH2
							text="CodeCraft"
							className="text-blue-500 dark:text-blue-400"
						/>
					</div>
				</Link>
				<Options />
			</div>
		</nav>
	);
};

export default Navbar;
