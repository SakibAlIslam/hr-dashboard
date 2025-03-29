/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                site: '#F9FAF5',
                card: '#FFFFFF',
                sidebar: '#FFFFFF',
                brand: '#D9F27E',
                accent: '#FCCE44',
                base: '#393C43',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
