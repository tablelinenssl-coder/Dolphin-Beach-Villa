/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        tcg12: {
          bg: "#fafaf7",
          ink: "#0f172a",
          muted: "#64748b",
          line: "#e2e8f0",
          accent: "#dc2626",
          accentsoft: "#fbe3e3",
        },
        ocean: {
          deep: "#081619",
          dark: "#0B1E22",
          surface: "#112A30",
          card: "#16353C",
          border: "rgba(50, 122, 123, 0.2)",
        },
        lagoon: {
          DEFAULT: "#327A7B",
          light: "#58A3A4",
          dark: "#205657",
          glow: "rgba(50, 122, 123, 0.35)",
        },
        sand: {
          warm: "#F6F3EC",
          light: "#FAF8F5",
          muted: "#EAE5DA",
          dark: "#D5CEBF",
        },
        coconut: {
          DEFAULT: "#1B2B21",
          deep: "#121E17",
          light: "#283F31",
        },
        sunlight: {
          DEFAULT: "#DFB174",
          light: "#E8C594",
          subtle: "rgba(223, 177, 116, 0.15)",
        },
        stone: {
          muted: "#8C877D",
          light: "#B2ADA3",
          dark: "#3A3732",
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        'tcg12-sans': ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        'tcg12-serif': ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
