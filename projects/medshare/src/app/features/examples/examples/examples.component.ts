import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'mds-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'mds.examples.menu.todos' },
    { link: 'stock-market', label: 'mds.examples.menu.stocks' },
    { link: 'theming', label: 'mds.examples.menu.theming' },
    { link: 'crud', label: 'mds.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'mds.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'mds.examples.menu.form' },
    { link: 'notifications', label: 'mds.examples.menu.notifications' },
    { link: 'elements', label: 'mds.examples.menu.elements' },
    { link: 'authenticated', label: 'mds.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
