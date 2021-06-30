import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { filter, debounceTime, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService
} from '../../../../core/core.module';

import {
  actionProviderFormReset,
  actionProviderFormUpdate
} from '../provider-form.actions';
import { selectProviderFormState } from '../provider-form.selectors';
import { ProviderForm } from '../provider-form.model';

@Component({
  selector: 'mds-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProviderFormComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  providerForm = this.fb.group({
    autosave: false,
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ]
    ],
    requestGift: [''],
    birthday: ['', [Validators.required]],
    rating: [0, Validators.required]
  });

  providerFormValueChanges$: Observable<ProviderForm>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private translate: TranslateService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.providerFormValueChanges$ = this.providerForm.valueChanges.pipe(
      debounceTime(500),
      filter((providerForm: ProviderForm) => providerForm.autosave)
    );
    this.store
      .pipe(select(selectProviderFormState), take(1))
      .subscribe((providerForm) =>
        this.providerForm.patchValue(providerForm.providerForm)
      );
  }

  update(providerForm: ProviderForm) {
    this.store.dispatch(actionProviderFormUpdate({ providerForm }));
  }

  save() {
    this.store.dispatch(
      actionProviderFormUpdate({ providerForm: this.providerForm.value })
    );
  }

  submit() {
    if (this.providerForm.valid) {
      this.save();
      this.notificationService.info(
        (this.providerForm.value.requestGift
          ? this.translate.instant('mds.examples.form.text4')
          : this.translate.instant('mds.examples.form.text5')) +
          ' : ' +
          this.translate.instant('mds.examples.form.text6')
      );
    }
  }

  reset() {
    this.providerForm.reset();
    this.providerForm.clearValidators();
    this.providerForm.clearAsyncValidators();
    this.store.dispatch(actionProviderFormReset());
  }
}
