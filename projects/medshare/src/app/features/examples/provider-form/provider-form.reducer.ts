import { ProviderFormState, ProviderForm } from './provider-form.model';
import {
  actionProviderFormReset,
  actionProviderFormUpdate
} from './provider-form.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: ProviderFormState = {
  providerForm: {} as ProviderForm
};

const reducer = createReducer(
  initialState,
  on(actionProviderFormUpdate, (state, { providerForm }) => ({
    ...state,
    providerForm
  })),
  on(actionProviderFormReset, () => initialState)
);

export function providerFormReducer(
  state: ProviderFormState | undefined,
  action: Action
) {
  return reducer(state, action);
}
