const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		fontFamily: {
			'sans': ['Mona Sans', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			colors: {
				customPrimary: "rgb(97, 77, 226)",
				customSecondary: "rgb(158, 145, 237)",
				customDarkBg1: "rgb(31, 32, 35)",
				customDarkBg2: "rgb(38, 39, 43)",
				customDarkBg3: "rgb(48, 49, 54)",
				customDarkBg3Hover: "rgb(55, 56, 62)",
				customContentSubtitle: "rgb(178, 184, 205)",
				customGrayBorder: "rgb(255,255,255,0.1)",
				customGrayText: "rgb(174, 178, 183)",
				customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
				customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
				customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
				aubergine: "rgb(63,14,64)",
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
