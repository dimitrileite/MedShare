import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderListRoutingModule } from './provider-list-routing.module';

@NgModule({
  declarations: [ProviderListComponent],
  imports: [CommonModule, SharedModule, ProviderListRoutingModule]
})
export class ProviderListModule {}
