import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { GasPrice } from './gas-price.model';


@Injectable()
export class GasPriceService {
  baseURL: string = 'https://ethgasstation.info/json/ethgasAPI.json';

  constructor(private http: HttpClient) {}

  getGasPrice(): Observable<GasPrice> {
    return this.http.get<GasPrice>(this.baseURL);
  }
}
