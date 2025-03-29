import { defineConfig } from 'vite'

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                site: '#F9FAF5',        // Site-wide background
                card: '#FFFFFF',        // Card background
                sidebar: '#FFFFFF',     // Sidebar background
                brand: '#D9F27E',       // Active menu / brand
                accent: '#FCCE44',      // Accent yellow
                base: '#393C43',        // Base text color
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
