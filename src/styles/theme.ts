export const colors = {
  // Base colors
  background: '#ffffff',
  white: '#ffffff',
  
  // Text colors
  text: {
    primary: '#1a1a1a',
    secondary: '#4a5568',
    muted: '#718096',
  },
  
  // Brand colors
  brand: {
    navy: '#1e3a5f',
    charcoal: '#2d3748',
    accent: '#5b7a9f',
  },
  
  // UI colors
  ui: {
    border: '#e2e8f0',
    bgSubtle: '#f7fafc',
  },
} as const;


/**
 * Layout Classes
 * Common container and spacing patterns
 */
export const layout = {
  // Page containers
  container: {
    narrow: 'max-w-3xl mx-auto px-8',      // 768px - for narrow content
    standard: 'max-w-5xl mx-auto px-8',    // 1024px - standard page width
    wide: 'max-w-7xl mx-auto px-8',        // 1280px - for wide layouts
  },
  
  // Sections
  section: {
    default: 'py-12',                      // Standard section padding
    large: 'py-20',                        // Large section padding
    hero: 'py-24',                         // Hero section padding
  },
  
  // Cards
  card: {
    base: 'bg-white border border-[var(--color-border)] p-8',
    hoverable: 'bg-white border border-[var(--color-border)] p-8 hover:shadow-md transition-shadow',
  },
} as const;

/**
 * Typography Classes
 * Consistent text styling patterns
 */
export const typography = {
  // Headings
  heading: {
    h1: 'text-4xl font-semibold text-[var(--color-charcoal)]',
    h2: 'text-3xl font-semibold text-[var(--color-charcoal)]',
    h3: 'text-2xl font-semibold text-[var(--color-charcoal)]',
  },
  
  // Body text
  body: {
    default: 'text-[var(--color-text-secondary)]',
    large: 'text-xl text-[var(--color-text-secondary)] leading-relaxed',
    small: 'text-sm text-[var(--color-text-muted)]',
  },
  
  // Special text
  meta: 'text-sm text-[var(--color-text-muted)]',
  accent: 'text-[var(--color-accent)]',
} as const;

/**
 * Button & Link Classes
 * Interactive element styles
 */
export const interactive = {
  // Links
  link: {
    default: 'text-[var(--color-navy)] hover:text-[var(--color-charcoal)] transition-colors',
    subtle: 'text-[var(--color-text-secondary)] hover:text-[var(--color-navy)] transition-colors',
    inline: 'inline-flex items-center gap-2 text-[var(--color-navy)] hover:text-[var(--color-charcoal)] transition-colors',
  },
  
  // Buttons
  button: {
    primary: 'bg-[var(--color-navy)] text-white px-7 py-2 hover:bg-[var(--color-charcoal)] transition-colors',
    secondary: 'bg-[var(--color-bg-subtle)] text-[var(--color-navy)] px-7 py-2 hover:bg-[var(--color-border)] transition-colors',
    text: 'text-[var(--color-navy)] hover:text-[var(--color-charcoal)] transition-colors',
  },
} as const;

/**
 * Component Classes
 * Complete component patterns
 */
export const components = {
  // Navigation
  nav: {
    container: 'bg-white border-b border-[var(--color-border)]',
    inner: 'max-w-7xl mx-auto px-8 py-5',
    link: 'relative py-2 cursor-pointer transition-colors hover:text-[var(--color-navy)]',
    linkActive: 'text-[var(--color-navy)]',
  },
  
  // Article/Post
  article: {
    container: 'bg-white',
    header: 'max-w-4xl mx-auto px-8 py-16',
    content: 'max-w-4xl mx-auto px-8',
    meta: 'flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-6',
  },
  
  // Footer
  footer: {
    container: 'bg-[var(--color-charcoal)] text-white py-12',
    inner: 'max-w-7xl mx-auto px-8',
    text: 'text-sm',
  },
} as const;

/**
 * Combine multiple class strings, filtering out falsy values
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get spacing value in Tailwind format
 * @param size - Spacing multiplier (1 = 0.25rem = 4px)
 */
export function spacing(size: number): string {
  return `${size * 0.25}rem`;
}

/**
 * Common spacing values for quick reference
 */
export const spacingValues = {
  xs: spacing(2),   // 0.5rem = 8px
  sm: spacing(4),   // 1rem = 16px
  md: spacing(6),   // 1.5rem = 24px
  lg: spacing(8),   // 2rem = 32px
  xl: spacing(12),  // 3rem = 48px
  '2xl': spacing(16), // 4rem = 64px
  '3xl': spacing(20), // 5rem = 80px
} as const;

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
