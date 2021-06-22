import { HttpErrorResponse } from '@angular/common/http';

export interface GasPrice {
  fast: number;
  fastest: number;
  safeLow: number;
  average: number;
  block_time: number;
  blockNum: number;
  speed: number;
  safeLowWait: number;
  avgWait: number;
  fastWait: number;
  fastestWait: number;
}


export interface GasPriceState {
  symbol: string;
  loading: boolean;
  gasprice?: GasPrice;
  error?: HttpErrorResponse;
}
