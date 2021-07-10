import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from './../core/core.module';

/* import { stockMarketReducer } from './stock-market/stock-market.reducer';
import { StockMarketState } from './stock-market/stock-market.model';

import { providerFormReducer } from './provider-form/provider-form.reducer';
import { ProviderFormState } from './provider-form/provider-form.model';

import { userFormReducer } from './user-form/user-form.reducer';
import { UserFormState } from './user-form/user-form.model'; */

export const FEATURE_NAME = 'admin';

export const selectAdmin =
  createFeatureSelector<State, AdminState>(FEATURE_NAME);

export const reducers: ActionReducerMap<AdminState> = {
  /*   providerForm: providerFormReducer,
  userForm: userFormReducer,   */
};

export interface AdminState {
  /*   providerForm: ProviderFormState;
  stocks: StockMarketState;
  userForm: UserFormState; */
}

export interface State extends AppState {
  admin: AdminState;
}
