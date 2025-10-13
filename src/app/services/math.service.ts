import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MathService {
  add(a: number, b: number) { return a + b; }
  subtract(a: number, b: number) { return a - b; }
  multiply(a: number, b: number) { return a * b; }
  divide(a: number, b: number) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }
  power(a: number, b: number) { return Math.pow(a, b); }

  // esimerkki raja-arvometodi
  clamp(x: number, min: number, max: number) {
    if (min > max) throw new Error('Invalid range');
    return Math.min(max, Math.max(min, x));
  }
}
