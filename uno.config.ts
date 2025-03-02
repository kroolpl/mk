import { defineConfig, presetUno, presetWebFonts, presetTypography, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Poppins:300,400,500,600,700',
        heading: 'Montserrat:700,800',
      },
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
  ],
  theme: {
    colors: {
      primary: '#2563eb',
      secondary: '#7c3aed',
      accent: '#059669',
      dark: '#1e293b',
      light: '#f9fafb',
      'gradient-1': '#2563eb',
      'gradient-2': '#7c3aed',
      'gradient-3': '#059669',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  shortcuts: {
    'btn': 'py-2 px-4 rounded-lg transition-all duration-300 font-medium',
    'btn-primary': 'bg-primary text-white hover:bg-primary/90',
    'btn-secondary': 'bg-secondary text-white hover:bg-secondary/90',
    'btn-accent': 'bg-accent text-white hover:bg-accent/90',
    'section-padding': 'py-16 md:py-24',
    'container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    'animate-float': 'animate-[float_6s_ease-in-out_infinite]',
    'animate-pulse-slow': 'animate-[pulse_4s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]',
  },
  rules: [
    [
      'float',
      {
        animation: 'float 6s ease-in-out infinite',
      },
    ],
  ],
  preflights: [
    {
      getCSS: () => `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `,
    },
  ],
});