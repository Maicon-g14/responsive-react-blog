module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme("colors"),
			primary: "#f2f2f2",
		}),
		extend: {
			spacing: {
				"2/3": "66.666667%",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
