import { createAction, props } from '@ngrx/store';
import { Form } from './provider-form.model';

export const actionFormUpdate = createAction(
  '[Form] Update',
  props<{ providerForm: Form }>()
);

export const actionFormReset = createAction('[Form] Reset');
