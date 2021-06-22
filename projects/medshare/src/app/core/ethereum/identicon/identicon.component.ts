import {
  Component,
  Input,
  SimpleChanges,
  NgZone,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

import { IdenticonService, IdenticonOptions } from './../identicon.service';

@Component({
  selector: 'mds-identicon',
  templateUrl: './identicon.component.html',
  styleUrls: ['./identicon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdenticonComponent implements OnInit {
  
  @Input() options!: IdenticonOptions

  data!: string;
  
  /** Template reference to the canvas element */
  /* @ViewChild('canvasIdenticon') canvasIdenticon!: ElementRef; */
  constructor(private zone: NgZone, private identiconService: IdenticonService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      /* var canvas: HTMLCanvasElement = this.canvasIdenticon.nativeElement;
      var cx = canvas.getContext('2d'); */
      this.setupIdenticon();
    }, 1);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.options &&
      changes.options.currentValue !== changes.options.previousValue
    ) {
      this.setupIdenticon();
    }
  }

  setupIdenticon() {
    this.zone.runOutsideAngular(() => {
      this.data = this.identiconService.create(this.options).toDataURL();
    });
  }

}
