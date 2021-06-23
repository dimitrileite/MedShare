import { AppState } from '../core.module';

export const NIGHT_MODE_THEME = 'BLACK-THEME';

export type Language = 'en' |  'de' | 'es' | 'fr' | 'he' | 'pt-br' | 'sk' ;

export type Currency = 'usd' | 'brl' | 'eur' | 'gbp';

export interface SettingsState {
  autoNightMode: boolean;
  currency: string;
  elementsAnimations: boolean;
  hour: number;
  language: string;
  nightTheme: string;
  pageAnimations: boolean;
  pageAnimationsDisabled: boolean;
  stickyHeader: boolean;
  theme: string;
}

export interface State extends AppState {
  settings: SettingsState;
}
