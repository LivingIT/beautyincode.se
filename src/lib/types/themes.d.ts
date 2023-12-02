// themes.d.ts

/**
 * Represents the allowed themes for the component.
 * Each theme corresponds to a specific set of styles.
 */
declare global {
  type Theme =
    | 'theme-1' // Orange background color
    | 'theme-2' // Light grey background color
    | 'theme-3' // Brown background color
    | 'theme-4' // Sand background color
    | 'theme-hero'; // hero theme
}

export {};
