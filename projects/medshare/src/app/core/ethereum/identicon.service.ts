import { RandomService } from './random.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdenticonService {

  constructor(private _randomService: RandomService) { }

  create(opts: Partial<IdenticonOptions>) {
    let canvas = document.createElement('canvas');
    this.render(opts, canvas);
    return canvas;
  }

  private createColor() {
    //saturation is the whole color spectrum
    let h = Math.floor(this._randomService.random() * 360);
    //saturation goes from 40 to 100, it avoids greyish colors
    let s = ((this._randomService.random() * 60) + 40) + '%';
    //lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
    let l = ((
      this._randomService.random() +
      this._randomService.random() +
      this._randomService.random() +
      this._randomService.random()) * 25) + '%';

    let color = 'hsl(' + h + ',' + s + ',' + l + ')';
    return color;
  }

  private createImageData(size: number) {
    let width = size; // Only support square icons for now
    let height = size;
  
    let dataWidth = Math.ceil(width / 2);
    let mirrorWidth = width - dataWidth;
  
    let data: number[] = [];
    for (let y = 0; y < height; y++) {
      let row: number[] = [];
      for (let x = 0; x < dataWidth; x++) {
        // this makes foreground and background color to have a 43% (1/2.3) probability
        // spot color has 13% chance
        row[x] = Math.floor(this._randomService.random() * 2.3);
      }
      let r = row.slice(0, mirrorWidth);
      r.reverse();
      row = row.concat(r);
  
      for (let i = 0; i < row.length; i++) {
        data.push(row[i]);
      }
    }
  
    return data;
  }

  private parseOptions(opts: Partial<IdenticonOptions>): IdenticonOptions {    
    const seed =
      opts.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);
  
    this._randomService.seedRandomness(seed);
  
    return {
      seed,
      size: opts.size || DEFAULT_SIZE,
      scale: opts.scale || DEFAULT_SCALE,
      color: opts.color || this.createColor(),
      bgcolor: opts.bgcolor || this.createColor(),
      spotcolor: opts.spotcolor || this.createColor()
    };
  }
  

  private render(
    providedOpts: Partial<IdenticonOptions>,
    canvas: HTMLCanvasElement
  ) {
    const opts = this.parseOptions(providedOpts || {});
    let imageData = this.createImageData(opts.size);
    let width = Math.sqrt(imageData.length);

    canvas.width = canvas.height = opts.size * opts.scale;

    let context = canvas.getContext('2d');

    // @ts-ignore
    context?.fillStyle = opts.bgcolor;
    context?.fillRect(0, 0, canvas.width, canvas.height);
    // @ts-ignore
    context?.fillStyle = opts.color;

    for (let i = 0; i < imageData.length; i++) {
      // if data is 0, leave the background
      if (imageData[i]) {
        let row = Math.floor(i / width);
        let column = i % width;

        // if data is 2, choose spot color, if 1 choose foreground
        // @ts-ignore
        context?.fillStyle = imageData[i] === 1 ? opts.color : opts.spotcolor;

        context?.fillRect(
          column * opts.scale,
          row * opts.scale,
          opts.scale,
          opts.scale
        );
      }
    }
    return canvas;
  }

}

export const DEFAULT_SIZE = 8;

export const DEFAULT_SCALE = 4;

export interface IdenticonOptions {
  seed: string;
  size: number;
  scale: number;
  color: string;
  bgcolor: string;
  spotcolor: string;
}
