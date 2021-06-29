import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { ProviderListService, Provider } from './../provider-list.service';

@Component({
  selector: 'mds-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
  /* changeDetection: ChangeDetectionStrategy.OnPush */
})
export class ProviderListComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  loading = true;
  errorMsg: string;
  successMsg: string;
  providers: Provider[];

  constructor(private providerListService: ProviderListService) {}

  ngOnInit() {
    this.providerListService.getProviders().subscribe(
      (providers: Provider[]) => {
        this.providers = providers;
        this.loading = false;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
        this.loading = false;
      }
    );
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  addNewProvider() {}
}
