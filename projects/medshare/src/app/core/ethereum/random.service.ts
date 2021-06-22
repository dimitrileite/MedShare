import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  // The random number is a js implementation of the Xorshift PRNG
  randArr = new Array(4); // Xorshift: [x, y, z, w] 32 bit values
  
  seedRandomness(seed: string) {
    let i: number;
    for (i = 0; i < this.randArr.length; i++) {
      this.randArr[i] = 0;
    }
    for (i = 0; i < seed.length; i++) {
      this.randArr[i % 4] =
        (this.randArr[i % 4] << 5) - this.randArr[i % 4] + seed.charCodeAt(i);
    }
  }

  constructor() { }

  random() {
    // based on Java's String.hashCode(), expanded to 4 32bit values
    let t = this.randArr[0] ^ (this.randArr[0] << 11);
  
    this.randArr[0] = this.randArr[1];
    this.randArr[1] = this.randArr[2];
    this.randArr[2] = this.randArr[3];
    this.randArr[3] = this.randArr[3] ^ (this.randArr[3] >> 19) ^ t ^ (t >> 8);
  
    return (this.randArr[3] >>> 0) / ((1 << 31) >>> 0);
  }

}



