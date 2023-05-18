/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'm27v1': {
                    100: '#fff',
                    200: '#eee',
                    DEFAULT:'#ddd',
                    300: '#ddd',
                    400: '#ccc',
                    500: '#bbb',
                    600: '#aa',

                },
                'm27v2': '#050505',
                'm27v3': {
                    50: 'hsl(144deg, 12%, 87%)',
                    100: 'hsl(144deg, 11%, 82%)',
                    200: 'hsl(144deg, 10%, 77%)',
                    300: 'hsl(144deg, 9%, 72%)',
                    400: 'hsl(144deg, 8%, 67%)',
                    DEFAULT: '#97a69d',
                    500: 'hsl(144deg, 8%, 62%)',
                    600: 'hsl(144deg, 7%, 57%)',
                    700: 'hsl(144deg, 6%, 52%)',
                    800: 'hsl(144deg, 5%, 47%)',
                    900: 'hsl(144deg, 4%, 42%)',
                    950: 'hsl(144deg, 3%, 37%)',
                },
                'm27v4': {
                    DEFAULT: '#414443',
                    600: 'hsl(160deg, 3%, 41%)',
                    700: 'hsl(160deg, 2%, 36%)',
                    800: 'hsl(160deg, 1%, 31%)',
                    900: '#414443',
                },
                'm27v5': {
                    DEFAULT: '#bd988b',
                    50: 'hsl(16deg, 30%, 77%)',
                    100: 'hsl(16deg, 29%, 74%)',
                    200: 'hsl(16deg, 28%, 69%)',
                    300: 'hsl(16deg, 27%, 64%)',
                    400: 'hsl(16deg, 26%, 59%)',
                    500: 'hsl(16deg, 25%, 54%)',
                    600: 'hsl(16deg, 24%, 49%)',
                    700: 'hsl(16deg, 23%, 44%)',
                    800: 'hsl(16deg, 22%, 39%)',
                    900: 'hsl(16deg, 21%, 34%)',
                    950: 'hsl(16deg, 20%, 29%)',
                }
            },
            boxShadow: {
                'glow-sm': '0 0px 10px 2px',
                'glow-md': '0 0px 10px 4px',
                'glow-lg': '0 0px 10px 8px',
                'glow-xl': '0 0px 20px 16px',
            },
            backgroundImage: {
                'codesample1': 'url("/projects/xpdrefjson/code_sample.png")'
            }
        },
        safeList: ["hover:animate-shake"]
    },
    plugins: [],
    variants: {
        width: ["responsive", "hover", "focus"]
    }
}
