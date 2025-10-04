/**
 * Tailwind CSS configuration.
 *
 * This file sets up the custom color palette and radius values used
 * throughout the landing pages and dashboard. Colours and radii are
 * derived directly from the project specification to ensure brand
 * consistency and accessibility.
 */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  darkMode: 'class',
theme: {
  extend: {
    colors: {
      bg: '#0B0F14',        // фон
      panel: '#121821',     // панели
      text: '#E8ECEF',
      muted: '#B7C2CC',
      accent: '#764AEF',
      'accent-hover': '#6A3DE3',
      border: '#1E2630',
      success: '#22C55E',
      warning: '#F59E0B',
      danger:  '#EF4444'
    },
    borderRadius: {
      xl: '16px',
      '2xl': '20px'
    },
    boxShadow: {
      panel: '0 8px 24px rgba(0,0,0,0.35)',
      soft: '0 6px 16px rgba(0,0,0,0.25)'
    },
    fontSize: {
      // для взрослых пользователей — не мельчим
      xs: ['14px', '20px'],
      sm: ['16px', '24px'],
      base: ['18px', '28px'],
      lg: ['20px', '30px'],
      xl: ['24px', '32px'],
      '2xl': ['32px', '38px'],
      '3xl': ['40px', '44px'],
      '4xl': ['48px', '52px'],
      '5xl': ['64px', '64px']
    },
    maxWidth: {
      content: '1120px', // ровно под сетку референса
    }
  }
}

  },
  plugins: []
};
