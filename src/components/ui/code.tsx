import type { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
}
const Code: FC<Props> = ({ children }) => {
	return (
		<div className="relative flex justify-center items-center mt-6 py-6 rounded-md">
			<code className="roboto-medium">{children}</code>
		</div>
	);
};
export default Code;
