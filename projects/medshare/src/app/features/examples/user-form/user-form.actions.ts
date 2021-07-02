import { createAction, props } from '@ngrx/store';
import { UserForm } from './user-form.model';

export const actionUserFormUpdate = createAction(
  '[User Form] Update',
  props<{ userForm: UserForm }>()
);

export const actionUserFormReset = createAction('[User Form] Reset');
