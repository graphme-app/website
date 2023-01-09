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
				aubergine: "rgb(63,14,64)",
				'primary': {
					'50': '#ebf1ff',
					'100': '#dbe5ff',
					'200': '#beceff',
					'300': '#96aeff',
					'400': '#6d81ff',
					'500': '#4b56ff',
					'600': '#2f2bff',
					'700': '#271fe3',
					'800': '#201db6',
					'900': '#191970',
				},				
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
