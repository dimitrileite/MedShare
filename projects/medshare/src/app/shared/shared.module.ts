import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from './../core/material/material.module';
import { FortawesomeModule } from './../core/fortawesome/fortawesome.module';
import { EthereumModule } from '../core/ethereum/ethereum.module';

import { BigInputComponent } from './big-input/big-input/big-input.component';
import { BigInputActionComponent } from './big-input/big-input-action/big-input-action.component';
import { RtlSupportDirective } from './rtl-support/rtl-support.directive';

@NgModule({
  declarations: [
    BigInputComponent,
    BigInputActionComponent,
    RtlSupportDirective
  ],
  imports: [
    CommonModule,
    FormsModule,

    MaterialModule,
    FortawesomeModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    FortawesomeModule,
    TranslateModule,

    BigInputComponent,
    BigInputActionComponent,
    RtlSupportDirective
  ]
})
export class SharedModule {
  constructor() {}
}
