import { UserFormService } from './../user-form.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StepperOrientation } from '@angular/material/stepper';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { Observable } from 'rxjs';
import { filter, debounceTime, take, map } from 'rxjs/operators';

import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService
} from '../../../../core/core.module';
import { IdenticonOptions } from '../../../../core/ethereum/identicon.service';
import { EthereumService } from '../../../../core/ethereum/ethereum.service';

import {
  actionUserFormReset,
  actionUserFormUpdate
} from '../user-form.actions';
import { selectUserFormState } from '../user-form.selectors';
import { UserForm } from '../user-form.model';

export function ConfirmValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'mds-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  mnemonic: string[];
  address: string = '';
  balance: string;
  testWords: { word: string; index: number }[];
  submitted: boolean = false;

  /* userFormValueChanges$: Observable<UserForm>; */
  stepperOrientation$: Observable<StepperOrientation>;

  identiconOptions: IdenticonOptions = {
    // All options are optional
    seed: this.address, // seed used to generate icon data, default: random
    color: '', // to manually specify the icon color, default: random
    bgcolor: '', // choose a different background color, default: random
    size: 8, // width/height of the icon in blocks, default: 8
    scale: 4, // width/height of each block in pixels, default: 4
    spotcolor: '' // each pixel has a 13% chance of being of a third color,
    // default: random. Set to -1 to disable it.
    // These "spots" create structures that look like eyes, mouths and noses.
  };

  userForm = this.fb.group(
    {
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-Z]*$')
        ]
      ],
      birthdate: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$')]
      ],
      email: ['', [Validators.required, Validators.email]],
      newpassword: ['', [Validators.required, Validators.minLength(8)]],
      gender: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
      acceptTerms: ['', [Validators.required]]
      /* autosave: false,
    rating: [0, Validators.required] */
    },
    {
      validator: ConfirmValidator('newpassword', 'confirmpassword')
    }
  );

  confirmForm = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private _ethereumService: EthereumService,
    private translate: TranslateService,
    private breakpointObserver: BreakpointObserver,
    private notificationService: NotificationService,
    private _userFormService: UserFormService
  ) {
    this.stepperOrientation$ = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit() {
    this.store
      .pipe(select(selectUserFormState), take(1))
      .subscribe((userForm) => this.userForm.patchValue(userForm.userForm));
    this.createWallet();
  }

  createWallet() {
    this._ethereumService.createWallet();
    this.mnemonic = this._ethereumService.getRandomMnemonic();
    this.address = this._ethereumService.getWalletAddress();
    this.balance = this._ethereumService.getWalletBalance(true).toString();
  }

  createTestWords(amount: number) {
    const mnemonic = [...this.mnemonic];
    this.testWords = Array(amount)
      .fill('')
      .map((_) => {
        const rand = Math.floor(Math.random() * mnemonic.length);
        const word = mnemonic.splice(rand)[0];
        const index = this.mnemonic.indexOf(word);
        return { word, index };
      })
      .sort((a, b) => a.index - b.index);
  }

  update(userForm: UserForm) {
    this.store.dispatch(actionUserFormUpdate({ userForm }));
  }

  onCreateUser() {
    if (this.userForm.valid) {
      this.notificationService.info(
        this.translate.instant('mds.examples.users.form.usercreated')
      );
    }
  }

  async onEncryptWallet() {
    if (this.userForm.valid) {
      const pwd = this.userForm.get('newpassword').value;
      const keystore = await this._ethereumService.encryptPrivatekey(pwd);
      this.saveUser(keystore);
      /* this.router.navigate(['display']); */
      this.notificationService.info(
        this.userForm.value.acceptTerms
          ? this.translate.instant('mds.examples.users.form.walletcreated')
          : this.translate.instant('mds.examples.users.form.shouldacceptterms')
      );
    }
  }

  saveUser(keystore: string): void {
    const data = {
      firstname: this.userForm.get('firstname').value,
      lastname: this.userForm.get('lastname').value,
      birthdate: this.userForm.get('birthdate').value,
      phone: this.userForm.get('phone').value,
      email: this.userForm.get('email').value,
      password: this.userForm.get('new-password').value,
      gender: this.userForm.get('gender').value,
      keystore: keystore
    };
    this._userFormService.create(data).subscribe(
      (response) => {
        this.submitted = true;
      },
      (error) => {
        this.submitted = false;
      }
    );
  }

  saveUser_() {
    this.store.dispatch(
      actionUserFormUpdate({ userForm: this.userForm.value })
    );
  }

  reset() {
    this.userForm.reset();
    this.userForm.clearValidators();
    this.userForm.clearAsyncValidators();
    this.store.dispatch(actionUserFormReset());
  }
}
