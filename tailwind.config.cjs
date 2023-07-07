// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	// **This was removed to test daisyUI. Add to content to revert to normal**
// 	// './node_modules/tw-elements/dist/js/**/*.js'
// 	content: ['./src/**/*.{html,js,svelte,ts}'],
// 	theme: {
// 		extend: {}
// 	},
// 	plugins: [require('daisyui')]
// };
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			screens: {
				'sm': '640px',
				// => @media (min-width: 640px) { ... }
		  
				'md': '768px',
				// => @media (min-width: 768px) { ... }
		  
				'lg': '1024px',
				// => @media (min-width: 1024px) { ... }
		  
				'xl': '1280px',
				// => @media (min-width: 1280px) { ... }
		  
				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			  },
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				}
			}
		}
	}
};

module.exports = config;
