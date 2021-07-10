import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { routeAnimations, selectIsAuthenticated } from '../../core/core.module';

import { State } from '../admin.state';

@Component({
  selector: 'mds-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  tabs = [
    { link: 'stock-market', label: 'mds.admin.menu.stocks' },
    { link: 'user-form', label: 'mds.admin.menu.user-form' },
    { link: 'provider-form', label: 'mds.admin.menu.provider-form' },
    { link: 'dashboard', label: 'mds.admin.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
