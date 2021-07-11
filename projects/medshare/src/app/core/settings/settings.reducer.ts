import { SettingsState, NIGHT_MODE_THEME } from './settings.model';

import {
  actionSettingsChangeAnimationsElements,
  actionSettingsChangeAnimationsPage,
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeCurrency,
  actionSettingsChangeHour,
  actionSettingsChangeLanguage,
  actionSettingsChangeStickyHeader,
  actionSettingsChangeTheme
} from './settings.actions';

import { Action, createReducer, on } from '@ngrx/store';

export const initialState: SettingsState = {
  autoNightMode: false,
  currency: 'usd',
  address: '0x00F50C0c6407eDF5b146FAdE0E8821dcf8cd43Bc',
  elementsAnimations: true,
  hour: 0,
  language: 'en',
  nightTheme: NIGHT_MODE_THEME,
  pageAnimations: true,
  pageAnimationsDisabled: false,
  stickyHeader: true,
  theme: 'DEFAULT-THEME'
};

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChangeAnimationsElements,
    actionSettingsChangeAnimationsPage,
    actionSettingsChangeAutoNightMode,
    actionSettingsChangeCurrency,
    actionSettingsChangeHour,
    actionSettingsChangeLanguage,
    actionSettingsChangeStickyHeader,
    actionSettingsChangeTheme,
    (state, action) => ({ ...state, ...action })
  ),
  on(
    actionSettingsChangeAnimationsPageDisabled,
    (state, { pageAnimationsDisabled }) => ({
      ...state,
      pageAnimationsDisabled,
      pageAnimations: false
    })
  )
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
