/** @type {import('tailwindcss').Config} */
export const content = ["./*.{html,js}"];
export const darkMode = "class";
export const theme = {
	extend: {
		colors: {
			wh: "hsl(0, 0%, 98%)",
			gr: "hsl(0, 0%, 41%)",
			bl: "hsl(0, 0%, 8%)",
		},
		boxShadow: {
			shMain: "0px 0px 10px #ddd",
		},
	},
};
export const plugins = [];
