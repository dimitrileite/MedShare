import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../examples.state';

export const selectUserFormState = createSelector(
  selectExamples,
  (state: ExamplesState) => state.userForm
);
