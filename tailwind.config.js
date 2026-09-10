/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                sowitech: {
                    navy: '#215589',   // 60% Base
                    sky: '#38BDF8',    // 30% Fluid Accent
                    amber: '#FAAD1B',  // 10% CTA Highlight
                },
            },
            fontFamily: {
                heading: ['var(--font-manrope)', 'sans-serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};