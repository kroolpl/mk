// Add stricter types for translations
export type Language = 'pl' | 'en';

// Use a more flexible approach to allow adding new keys
export type TranslationKey = keyof typeof import('./ui').ui['pl'];

export interface Translation {
  [key in TranslationKey]: string;
}

export interface Languages {
  [key in Language]: string;
} 