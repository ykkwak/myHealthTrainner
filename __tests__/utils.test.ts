
import {calculateBMI} from '../src/utils';

describe('calculateBMI', () => {
  it('calculates BMI correctly for valid inputs', () => {
    expect(calculateBMI(70, 1.75)).toBeCloseTo(22.86);
  });

  it('returns 0 when height is 0', () => {
    expect(calculateBMI(70, 0)).toBe(0);
  });

  it('returns 0 when height is negative', () => {
    expect(calculateBMI(70, -1.75)).toBe(0);
  });

  it('handles zero weight', () => {
    expect(calculateBMI(0, 1.75)).toBe(0);
  });
});
