module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				goldman: ['"Goldman"', "cursive"]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
