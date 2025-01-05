import CodeEditor from "@/components/shared/code-editor";
import TypographyH2 from "@/components/ui/h2";
import TypographyP from "@/components/ui/p";

const contentCallback = `
const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
`;
const UseCallbackSection = () => {
	return (
		<div className="mt-6">
			<TypographyH2 text="useCallback" />
			<TypographyP className="my-4">
				useCallback en React se utiliza para memorizar funciones, asegurando que
				una función nueva no se cree en cada renderizado del componente. Esto es
				útil cuando se pasa una función como prop a un hijo o se utiliza en
				dependencias de otros hooks como useEffect o useMemo
			</TypographyP>
			<CodeEditor language="javascript" content={contentCallback} />
			<TypographyP className="mt-4">
				La función handleSubmit se mantiene constante en memoria, lo que
				significa que cada vez que cambia productId o referrer, se vuelve a
				crear la función para reflejar los nuevos valores.
			</TypographyP>
			<TypographyP className="mt-4">
				Esto optimiza la reutilización de la función en el contexto de la
				aplicación, evitando la creación constante de una nueva función en cada
				renderizado del componente.
			</TypographyP>
		</div>
	);
};
export default UseCallbackSection;
