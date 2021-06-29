import { FormState, Form } from './provider-form.model';
import { actionFormReset, actionFormUpdate } from './provider-form.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: FormState = {
  providerForm: {} as Form
};

const reducer = createReducer(
  initialState,
  on(actionFormUpdate, (state, { providerForm }) => ({
    ...state,
    providerForm
  })),
  on(actionFormReset, () => initialState)
);

export function providerFormReducer(
  state: FormState | undefined,
  action: Action
) {
  return reducer(state, action);
}
