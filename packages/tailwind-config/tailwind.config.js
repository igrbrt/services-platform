const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		// app content
		`app/**/*.{js,ts,jsx,tsx}`,
		`src/**/*.{js,ts,jsx,tsx}`,
		`./app/**/*.{js,ts,jsx,tsx}`,
		// include packages if not transpiling
		// '../../packages/ui/**/*.{js,ts,jsx,tsx}',
	],
	// mode: 'jit',
	theme: {
		colors: {
			...colors,
			primary: "#003f5c",
			//primary: "#2F80ED",
			//primaryLighter: "#5D9AF1",
			//grey: "#666666",
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
