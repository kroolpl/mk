// Add type definitions for translations
export type Language = 'en' | 'pl';

// Use a more flexible approach to allow adding new keys
export type TranslationKey = string;

export interface Translation {
  [key: string]: string;
}

export interface Languages {
  [key: Language]: string;
} 