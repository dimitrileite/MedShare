import { createAction, props } from '@ngrx/store';
import { ProviderForm } from './provider-form.model';

export const actionProviderFormUpdate = createAction(
  '[Provider Form] Update',
  props<{ providerForm: ProviderForm }>()
);

export const actionProviderFormReset = createAction('[Provider Form] Reset');
