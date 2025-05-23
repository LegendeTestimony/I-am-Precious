/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
  colors: {
    white: '#D0D0D0',
    black: '#000000',
    grey: '#F3F3F3',
    red: '#D60000',
    transparent: 'transparent',
    twitter: '#1DA1F2',
    purple: '#8B46FF',
    nude: '#f9f9df',
    whiteblue: '#f1f3fc',
    blue: '#0015D6',
    darkblue: '#34189a',
    orange: '#FFC235',
    yellow: "#D7CD07",
  },
  fontSize: {
    sm: '12px',
    base: '14px',
    xl: '16px',
    '2xl': '20px',
    '3xl': '28px',
    '4xl': '38px',
    '5xl': '50px'
  },
  extend: {
  extend: {
    fontFamily: {
      sans: [
      "Inter",
      "DM Sans",
      "ui-sans-serif",
      "system-ui",
      "Gelasio",
      "Plus Jakarta Sans",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji"
      ],
    },
    boxShadow: {
      'custom-heavy': '7px 7px 15px 0px #08080830'
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)'
    },
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))'
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))'
      },
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))'
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))'
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))'
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))'
      },
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      chart: {
        '1': 'hsl(var(--chart-1))',
        '2': 'hsl(var(--chart-2))',
        '3': 'hsl(var(--chart-3))',
        '4': 'hsl(var(--chart-4))',
        '5': 'hsl(var(--chart-5))'
      }
    }
  }
},
plugins: [ 
    function ({addUtilities}) {
        const newUtilities = {
            ".scrollbar-thin" : {
                scrollbarWidth : "thin", // Firefox specific
                scrollbarColor : "rgb(31 29 29) white"
            },
            ".scrollbar-webkit" : {
              "&::-webkit-scrollbar" : {
                width: "8px"
              },
              "&::-webkit-scrollbar-track" : {
                background: "white",
                borderRadius: "10px" // Round the scrollbar track
              },
              "&::-webkit-scrollbar-thumb" : {
                backgroundColor: "rgb(31 41 55)",
                borderRadius: "20px", // Round the scrollbar thumb
                border: "2px solid white"
              }
            }
        }
        addUtilities(newUtilities, ["responsive", "hover"])
    },
    require("tailwindcss-animate")
],
},}
