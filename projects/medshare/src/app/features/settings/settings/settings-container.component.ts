import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { EthereumService } from '../../../core/ethereum/ethereum.service';
import {
  actionSettingsChangeAnimationsElements,
  actionSettingsChangeAnimationsPage,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeLanguage,
  actionSettingsChangeCurrency,
  actionSettingsChangeTheme,
  actionSettingsChangeStickyHeader
} from '../../../core/settings/settings.actions';

import { SettingsState, State } from '../../../core/settings/settings.model';
import { selectSettings } from '../../../core/settings/settings.selectors';

import { DialogMnemonicComponent } from './components/dialog-mnemonic/dialog-mnemonic.component';

@Component({
  selector: 'mds-settings',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsContainerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  
  settings$: Observable<SettingsState>;

  themes = [
    { value: 'DEFAULT-THEME', label: 'blue' },
    { value: 'LIGHT-THEME', label: 'light' },
    { value: 'NATURE-THEME', label: 'nature' },
    { value: 'BLACK-THEME', label: 'dark' }
  ];

  languages = [
    { value: 'en', label: 'English' },
    { value: 'de', label: 'Deutsch' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'he', label: 'עברית' },
    { value: 'pt-br', label: 'Português' },
    { value: 'sk', label: 'Slovenčina' },
    { value: 'zh-cn', label: '简体中文' }
  ];

  currencies = [
    { value: 'usd', label: 'US Dollar' },    
    { value: 'brl', label: 'Real Brasileiro' },
    { value: 'eur', label: 'EURO' },
    { value: 'gbp', label: 'Great Britain Pound' }
  ];

  mnemonic: string[];

  constructor(private store: Store<State>,
    public dialog: MatDialog,
    private _ethereumService: EthereumService
  ) { }

  ngOnInit() {
    this.settings$ = this.store.pipe(select(selectSettings));
    this._ethereumService.createWallet();
    this.mnemonic = this._ethereumService.getRandomMnemonic();
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }

  onCurrencySelect({ value: currency }) {
    this.store.dispatch(actionSettingsChangeCurrency({ currency }));
  }

  onStickyHeaderToggle({ checked: stickyHeader }) {
    this.store.dispatch(actionSettingsChangeStickyHeader({ stickyHeader }));
  }

  onOpenDialogClick(): void {  
    const dialogRef = this.dialog.open(DialogMnemonicComponent, {
      width: '250px',
      data: { mnemonic: this.mnemonic }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      /* this.animal = result; */
    });
  }

  onThemeSelect({ value: theme }) {
    this.store.dispatch(actionSettingsChangeTheme({ theme }));
  }

  onAutoNightModeToggle({ checked: autoNightMode }) {
    this.store.dispatch(actionSettingsChangeAutoNightMode({ autoNightMode }));
  }


  onPageAnimationsToggle({ checked: pageAnimations }) {
    this.store.dispatch(actionSettingsChangeAnimationsPage({ pageAnimations }));
  }

  onElementsAnimationsToggle({ checked: elementsAnimations }) {
    this.store.dispatch(
      actionSettingsChangeAnimationsElements({ elementsAnimations })
    );
  }
}