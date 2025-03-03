import { ui, defaultLang } from './ui';
import type { TranslationKey, Translation } from './types';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return 'pl';
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui['pl']) {
    return ui[lang][key] || ui['pl'][key];
  };
}

export function getRouteFromUrl(url: URL) {
  const pathname = url.pathname;
  const parts = pathname.split('/');
  if (parts.length > 2) {
    return parts.slice(2).join('/') || '';
  }
  return '';
}