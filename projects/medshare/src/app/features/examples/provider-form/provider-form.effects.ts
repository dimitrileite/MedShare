import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '../../../core/core.module';

import { actionProviderFormUpdate } from './provider-form.actions';

export const FORM_KEY = 'EXAMPLES.FORM';

@Injectable()
export class ProviderFormEffects {
  persistForm = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionProviderFormUpdate),
        tap((action) =>
          this.localStorageService.setItem(FORM_KEY, {
            providerForm: action.providerForm
          })
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}
}
