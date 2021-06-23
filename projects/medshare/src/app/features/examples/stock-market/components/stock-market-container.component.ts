import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

import { selectStockMarket } from '../stock-market.selectors';
import { actionStockMarketRetrieve } from '../stock-market.actions';
import { StockMarketState } from '../stock-market.model';
import { State } from '../../examples.state';

import { GasPriceService } from './../../../../core/ethereum/gas-price.service';
import { GasPrice } from '../../../../core/ethereum/gas-price.model';

@Component({
  selector: 'mds-stock-market',
  templateUrl: './stock-market-container.component.html',
  styleUrls: ['./stock-market-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockMarketContainerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  stocks$: Observable<StockMarketState>;
  
  gasPrice: GasPrice;
  displayedColumns: string[] = ['fastest', 'safeSlow', 'average', 'speed'];

  loading: boolean = false;
  errorMessage;

  constructor(public store: Store<State>,
    private _gasPriceService: GasPriceService) { }

  ngOnInit() {
    this.stocks$ = this.store.pipe(select(selectStockMarket));
    this.stocks$
      .pipe(take(1))
      .subscribe((stocks) => this.onSymbolChange(stocks.symbol));
    this.getGasPrice();
  }

  onSymbolChange(symbol: string) {
    this.store.dispatch(actionStockMarketRetrieve({ symbol }));
  }

  getGasPrice() {
    this.loading = true;
    this.errorMessage = '';
    this._gasPriceService.getGasPrice().subscribe(
      response => {
        //next() callback
        console.log('response received');
        this.gasPrice = response;
      },
      error => {
        //error() callback
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      },
      () => {
        //complete() callback
        console.error('Request completed'); //This is actually not needed
        this.loading = false;
      }
    );
  }
}
