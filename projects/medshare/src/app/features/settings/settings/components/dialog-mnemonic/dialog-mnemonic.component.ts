import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'mds-dialog-mnemonic',
  templateUrl: './dialog-mnemonic.component.html',
  styleUrls: ['./dialog-mnemonic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogMnemonicComponent implements OnInit {
  mnemonic: string[];
  
  constructor(public dialogRef: MatDialogRef<DialogMnemonicComponent>,
    @Inject(MAT_DIALOG_DATA) private _mnemonic: string[]) {
  }

  ngOnInit(): void {
    this.mnemonic = this._mnemonic
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  onRevealMnemonicClick() { 
      
  }

}