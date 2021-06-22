import { Component } from '@angular/core';

@Component({
  selector: 'app-family-svg',
  templateUrl: './family.component.svg'
})
export class SvgFamilyComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}