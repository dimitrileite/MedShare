import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdenticonComponent } from './identicon/identicon.component';
import { EthereumService } from './ethereum.service';

@NgModule({
  declarations: [IdenticonComponent],
  imports: [CommonModule],
  exports: [IdenticonComponent],
  providers: [EthereumService]
})
export class EthereumModule {}
