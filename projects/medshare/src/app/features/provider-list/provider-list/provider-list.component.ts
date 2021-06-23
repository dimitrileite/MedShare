import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { Provider, providers } from '../provider-list.data';

@Component({
  selector: 'mds-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProviderListComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  providers: Provider[] = providers;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
