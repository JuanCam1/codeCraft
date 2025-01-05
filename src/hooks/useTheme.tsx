import { ThemeProviderContext } from "@/context/ThemeContext";
import { use } from "react";

export const useTheme = () => {
	const context = use(ThemeProviderContext);

	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider");

	return context;
};