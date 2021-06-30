import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../examples.state';

export const selectProviderFormState = createSelector(
  selectExamples,
  (state: ExamplesState) => state.providerForm
);
