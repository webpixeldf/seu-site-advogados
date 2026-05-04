import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          DEFAULT: '#83b440',
          claro: '#84e04a',
        },
        escuro: '#162a2a',
        laranja: {
          DEFAULT: '#de7322',
          escuro: '#ba5918',
        },
        cinza: {
          claro: '#eaecec',
        },
        dourado: '#b58c61',
        marrom: '#593e2e',
        mostarda: '#e99f45',
      },
      fontFamily: {
        lexend: ['var(--font-lexend)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
