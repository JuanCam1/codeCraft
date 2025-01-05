import { ThemeProvider } from "./context/ThemeContext";
import AppRouter from "./router/AppRouter";

const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="blog-ui-theme">
			<AppRouter />
		</ThemeProvider>
	);
};
export default App;
