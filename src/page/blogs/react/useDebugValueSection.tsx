import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/ui/h2";
import TypographyP from "@/components/ui/p";
import useDebugImg from "@/assets/images/useDebug.webp";

const contentDebug = `
import { useDebugValue } from 'react';

function useOnlineStatus() {
  // ...
  useDebugValue(isOnline ? 'Online' : 'Offline');
  // ...
}`;
const useDebugValueSection = () => {
	return (
		<div className="mt-6">
			<TypographyH2 text="useDebugValue" />
			<TypographyP className="my-4 dark:text-gray-400">
				useDebugValue es un Hook de React que te permite añadir una etiqueta a
				un Hook personalizado en las herramientas de desarrollo de React.
			</TypographyP>
			<CodeEditor language="javascript" content={contentDebug} />
			<TypographyP className="mt-4">
				Esto le da a los componentes que llamen a useOnlineStatus una etiqueta
				como OnlineStatus: "Online" cuando lo inspeccionas:
			</TypographyP>
			<div className="flex justify-center items-center my-4 w-full">
				<img
					src={useDebugImg}
					alt="useDebugValue"
					className="h-full object-contain"
				/>
			</div>
		</div>
	);
};
export default useDebugValueSection;
