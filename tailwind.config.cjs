/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			colors: {
				trt: {
					black: {
						DEFAULT: "#0E0E0E",
						100: "#2E2E2E",
						200: "#3E3E3E",
						300: "#4E4E4E",
						400: "#5E5E5E",
					},
					white: {
						DEFAULT: "#F2F2F2",
						100: "#E2E2E2",
						200: "#D2D2D2",
						300: "#C2C2C2",
						400: "#B2B2B2",
					},
					red: {
						DEFAULT: "#FF4F4F",
						100: "#CC4040",
						200: "#B23838",
						300: "#993030",
						400: "#4C1818",
					},
				},
			},
		},
	},
	plugins: [],
};
