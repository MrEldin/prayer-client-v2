export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: theme => ({
                'radial-gradient': 'radial-gradient(circle, rgba(40,160,136,1) 0%, rgba(29,72,73,1) 100%)',
                'dark-radial-gradient': 'radial-gradient(circle, rgba(28,90,116,1) 0%, rgba(14,55,71,1) 100%)',  // Change the colors to whatever you desire for dark mode
            })
        }
    },
    variants: {
        extend: {
            backgroundImage: ['dark']
        }
    },
    plugins: [],
}
