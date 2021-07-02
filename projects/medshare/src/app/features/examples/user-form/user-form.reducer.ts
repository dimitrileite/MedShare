import { UserFormState, UserForm } from './user-form.model';
import { actionUserFormReset, actionUserFormUpdate } from './user-form.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const initialState: UserFormState = {
  userForm: {} as UserForm
};

const reducer = createReducer(
  initialState,
  on(actionUserFormUpdate, (state, { userForm }) => ({
    ...state,
    userForm
  })),
  on(actionUserFormReset, () => initialState)
);

export function userFormReducer(
  state: UserFormState | undefined,
  action: Action
) {
  return reducer(state, action);
}
