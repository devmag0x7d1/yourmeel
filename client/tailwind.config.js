/** @type {import('tailwindcss').Config} */

export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}"
	],
	theme: {
		screens: {
			// "mobile": "",
			"tablet": "640px",
			"laptop": "960px",
			"desktop": "1290px"
		}
	},
	plugins: []
}
