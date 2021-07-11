import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import browser from 'browser-detect';

import { environment as env } from '../../environments/environment';

import {
  authLogin,
  authLogout,
  LocalStorageService,
  selectEffectiveTheme,
  selectIsAuthenticated,
  selectSettingsAddress,
  selectSettingsCurrency,
  selectSettingsLanguage,
  selectSettingsStickyHeader,
  routeAnimations
} from '../core/core.module';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage,
  actionSettingsChangeCurrency
} from '../core/settings/settings.actions';
import { IdenticonOptions } from '../core/ethereum/identicon.service';

@Component({
  selector: 'mds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = 'assets/images/logo.png';
  languages = ['en', 'de', 'es', 'fr', 'he', 'pt-br', 'sk', 'zh-cn'];
  navigation = [
    { link: 'about', label: 'mds.menu.about' },
    { link: 'features', label: 'mds.menu.features' },
    { link: 'providers', label: 'mds.menu.providers' },
    { link: 'examples', label: 'mds.menu.examples' },
    { link: 'admin', label: 'mds.menu.admin' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'mds.menu.settings' }
  ];

  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  currency$: Observable<string>;
  theme$: Observable<string>;
  address$: Observable<string>;

  identiconOptions: IdenticonOptions;

  constructor(
    private store: Store,
    private storageService: LocalStorageService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.currency$ = this.store.pipe(select(selectSettingsCurrency));
    this.address$ = this.store.pipe(select(selectSettingsAddress));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));

    this.identiconOptions = {
      // All options are optional
      seed: this.address$.toString(), // seed used to generate icon data, default: random
      color: '', // to manually specify the icon color, default: random
      bgcolor: '', // choose a different background color, default: random
      size: 8, // width/height of the icon in blocks, default: 8
      scale: 4, // width/height of each block in pixels, default: 4
      spotcolor: '' // each pixel has a 13% chance of being of a third color,
      // default: random. Set to -1 to disable it.
      // These "spots" create structures that look like eyes, mouths and noses.
    };
  }

  onLoginClick() {
    this.store.dispatch(authLogin());
  }

  onLogoutClick() {
    this.store.dispatch(authLogout());
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }

  onCurrencySelect({ value: currency }) {
    this.store.dispatch(actionSettingsChangeCurrency({ currency }));
  }
}
