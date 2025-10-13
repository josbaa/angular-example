import { TestBed } from '@angular/core/testing';
import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('adds positive numbers', () => {
    expect(service.add(2, 3)).toBe(5);
  });

  it('subtract can yield negative result', () => {
    expect(service.subtract(3, 5)).toBe(-2);
  });

  it('multiplies by zero -> zero (boundary)', () => {
    expect(service.multiply(9, 0)).toBe(0);
  });

  it('divides normally', () => {
    expect(service.divide(10, 2)).toBe(5);
  });

  it('throws on division by zero (error boundary)', () => {
    expect(() => service.divide(1, 0)).toThrowError('Division by zero');
  });

  it('power with zero exponent is 1 (boundary)', () => {
    expect(service.power(7, 0)).toBe(1);
  });

  it('clamp caps below min to min', () => {
    expect(service.clamp(-5, 0, 10)).toBe(0);
  });

  it('clamp throws when min > max (invalid range)', () => {
    expect(() => service.clamp(5, 10, 0)).toThrowError('Invalid range');
  });
});
