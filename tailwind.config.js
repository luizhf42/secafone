/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			background: {
				start: "rgba(73, 83, 82, 1)",
				stop: "rgba(24, 33, 32, 1)",
			},
			height: {
				"screen-9/10": "90vh",
			},
			colors: {
				anchor: "#163a89",
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".button-pulse": {
					"box-shadow": "0 0 0 0 rgba(131, 188, 232, 0.7)",
					animation: "pulse 1.5s infinite cubic-bezier(0.66, 0, 0, 1)",
					transition: "500ms ease-in-out",
				},
				".main-background": {
					background: "rgb(73, 83, 82)",
					background:
						"radial-gradient(circle, rgba(73, 83, 82, 1) 0%, rgba(24, 33, 32, 1) 100%)",
				},
			});
		}),
	],
};
