import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../../core/core.module';

import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { CrudComponent } from './crud/components/crud.component';
import { ElementsComponent } from './elements/elements.component';
import { ExamplesComponent } from './examples/examples.component';
import { FormComponent } from './form/components/form.component';
import { NotificationsComponent } from './notifications/components/notifications.component';
import { ParentComponent } from './theming/parent/parent.component';
import { ProviderFormComponent } from './provider-form/components/provider-form.component';
import { StockMarketContainerComponent } from './stock-market/components/stock-market-container.component';
import { TodosContainerComponent } from './todos/components/todos-container.component';
import { UserComponent } from './simple-state-management/components/user.component';
import { UserFormComponent } from './user-form/components/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: '',
        redirectTo: 'stock-market',
        pathMatch: 'full'
      },
      {
        path: 'todos',
        component: TodosContainerComponent,
        data: { title: 'mds.examples.menu.todos' }
      },
      {
        path: 'stock-market',
        component: StockMarketContainerComponent,
        data: { title: 'mds.examples.menu.stocks' }
      },
      {
        path: 'theming',
        component: ParentComponent,
        data: { title: 'mds.examples.menu.theming' }
      },
      {
        path: 'crud',
        redirectTo: 'crud/',
        pathMatch: 'full'
      },
      {
        path: 'crud/:id',
        component: CrudComponent,
        data: { title: 'mds.examples.menu.crud' }
      },
      {
        path: 'simple-state-management',
        component: UserComponent,
        data: { title: 'mds.examples.menu.simple-state-management' }
      },
      {
        path: 'form',
        component: FormComponent,
        data: { title: 'mds.examples.menu.form' }
      },
      {
        path: 'provider-form',
        component: ProviderFormComponent,
        data: { title: 'mds.providers.title' }
      },
      {
        path: 'user-form',
        component: UserFormComponent,
        data: { title: 'mds.providers.title' }
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        data: { title: 'mds.examples.menu.notifications' }
      },
      {
        path: 'elements',
        component: ElementsComponent,
        data: { title: 'mds.examples.menu.elements' }
      },
      {
        path: 'authenticated',
        component: AuthenticatedComponent,
        canActivate: [AuthGuardService],
        data: { title: 'mds.examples.menu.auth' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
