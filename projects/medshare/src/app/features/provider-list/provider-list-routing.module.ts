import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderListComponent } from './provider-list/provider-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProviderListComponent,
    data: { title: 'mds.menu.providers' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderListRoutingModule {}
