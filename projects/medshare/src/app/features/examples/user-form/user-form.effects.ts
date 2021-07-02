import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '../../../core/core.module';

import { actionUserFormUpdate } from './user-form.actions';

export const FORM_KEY = 'EXAMPLES.FORM';

@Injectable()
export class UserFormEffects {
  persistForm = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionUserFormUpdate),
        tap((action) =>
          this.localStorageService.setItem(FORM_KEY, {
            userForm: action.userForm
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
