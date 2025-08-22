export const COLORS = {
  primary: {
    emerald: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      500: '#10b981',
      600: '#059669',
      700: '#047857'
    },
    green: {
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d'
    }
  }
} as const;

export const ANIMATION_DURATIONS = {
  fast: 'duration-200',
  normal: 'duration-300',
  slow: 'duration-500',
  slower: 'duration-700'
} as const;

export const SHADOWS = {
  card: 'shadow-lg hover:shadow-2xl',
  button: 'hover:shadow-2xl hover:shadow-emerald-500/30',
  glow: 'shadow-2xl shadow-emerald-100/20'
} as const;

export const GRADIENTS = {
  primary: 'bg-gradient-to-r from-emerald-600 to-green-600',
  hero: 'bg-gradient-to-br from-emerald-50/80 via-blue-50/60 to-green-50/80',
  card: 'bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50'
} as const;