import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMnemonicComponent } from './dialog-mnemonic.component';

describe('DialogMnemonicComponent', () => {
  let component: DialogMnemonicComponent;
  let fixture: ComponentFixture<DialogMnemonicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMnemonicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMnemonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
