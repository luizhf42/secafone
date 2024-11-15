/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			height: {
				"screen-9/10": "90vh",
			},
			colors: {
				"anchor-dark": "#163a89",
				"anchor-light": "#b3f6ff",
			},
			screens: {
				xs: "330px",
			},
		},
	},
};
