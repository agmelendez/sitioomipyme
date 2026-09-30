/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores Oficiales Manual de Marca OMiPYME 2025
        'omipyme-blue': {
          DEFAULT: '#0D3996',
          50: '#EEF4FC',
          100: '#D5E2F9',
          200: '#ABC5F3',
          300: '#75A0EB',
          400: '#3D77E0',
          500: '#0D3996',
          600: '#0A2D78',
          700: '#07266E',
          800: '#051B4E',
          900: '#03102E',
        },
        'omipyme-gold': {
          DEFAULT: '#FBB92C',
          50: '#FEF8EA',
          100: '#FDF0D0',
          200: '#FCE1A1',
          300: '#FBD272',
          400: '#FBC343',
          500: '#FBB92C',
          600: '#E5A31E',
          700: '#C28312',
          800: '#8A5D0A',
          900: '#4A3300',
        },
        'omipyme-gray': {
          DEFAULT: '#D5D4D4',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E5EA',
          300: '#D5D4D4',
          400: '#94A3B8',
          500: '#64748B',
        },

        // Colores Institucionales UNED
        'uned-blue': {
          DEFAULT: '#0D3996',
          50: '#EEF4FC',
          100: '#D5E2F9',
          200: '#ABC5F3',
          300: '#75A0EB',
          400: '#3D77E0',
          500: '#0D3996',
          600: '#07266E',
          700: '#051B4E',
          800: '#03102E',
          900: '#020A1C',
        },
        'uned-green': {
          DEFAULT: '#057A55',
          50: '#E6F2EB',
          100: '#CCE6D6',
          200: '#99CCAD',
          300: '#66B385',
          400: '#33995C',
          500: '#057A55',
          600: '#046345',
          700: '#034C35',
          800: '#023525',
          900: '#011F16',
        },

        // Colores por Pilar (Modelo de Cinco Pilares)
        'pilar-observatorio': {
          DEFAULT: '#0D3996',
          light: '#1D55C4',
          dark: '#07266E',
          bg: '#EEF4FC',
        },
        'pilar-herramientas': {
          DEFAULT: '#D97706',
          light: '#F59E0B',
          dark: '#B45309',
          bg: '#FEF8EA',
        },
        'pilar-investigacion': {
          DEFAULT: '#057A55',
          light: '#0E9F6E',
          dark: '#03543F',
          bg: '#E6F2EB',
        },
        'pilar-formacion': {
          DEFAULT: '#6B21A8',
          light: '#9333EA',
          dark: '#581C87',
          bg: '#F3E8FF',
        },
        'pilar-ecosistema': {
          DEFAULT: '#0284C7',
          light: '#38BDF8',
          dark: '#0369A1',
          bg: '#E0F2FE',
        },

        // Colores de Soporte (Grises y Estados)
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#1D55C4',
      },

      fontFamily: {
        // Tipografía Oficial Manual de Marca 2025
        'kanit': ['Kanit', 'Montserrat', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],

        // Aliases semánticos
        'heading': ['Kanit', 'Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },

      fontSize: {
        // Escala tipográfica optimizada
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
        '8xl': ['6rem', { lineHeight: '1' }],           // 96px
      },

      spacing: {
        // Sistema de espaciado consistente
        '18': '4.5rem',  // 72px
        '88': '22rem',   // 352px
        '112': '28rem',  // 448px
        '128': '32rem',  // 512px
      },

      maxWidth: {
        // Contenedores responsivos
        '8xl': '88rem',   // 1408px
        '9xl': '96rem',   // 1536px
      },

      boxShadow: {
        // Sombras para elevación
        'pilar': '0 4px 6px -1px rgba(0, 51, 102, 0.1), 0 2px 4px -1px rgba(0, 51, 102, 0.06)',
        'pilar-lg': '0 10px 15px -3px rgba(0, 51, 102, 0.1), 0 4px 6px -2px rgba(0, 51, 102, 0.05)',
        'pilar-xl': '0 20px 25px -5px rgba(0, 51, 102, 0.1), 0 10px 10px -5px rgba(0, 51, 102, 0.04)',
      },

      animation: {
        // Animaciones personalizadas
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
      },

      backgroundImage: {
        // Gradientes por Pilar
        'gradient-observatorio': 'linear-gradient(135deg, #0D3996 0%, #1D55C4 100%)',
        'gradient-herramientas': 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
        'gradient-investigacion': 'linear-gradient(135deg, #057A55 0%, #0E9F6E 100%)',
        'gradient-formacion': 'linear-gradient(135deg, #6B21A8 0%, #9333EA 100%)',
        'gradient-ecosistema': 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
        'gradient-hero': 'linear-gradient(135deg, #07266E 0%, #0D3996 60%, #154cbd 100%)',
      },

      borderRadius: {
        // Radios personalizados
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },

      zIndex: {
        // Capas de elevación
        'navigation': '1000',
        'dropdown': '1010',
        'modal': '1020',
        'tooltip': '1030',
        'notification': '1040',
      },

      screens: {
        // Breakpoints personalizados
        'xs': '475px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
