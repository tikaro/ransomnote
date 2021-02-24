import { canConstruct } from './ransomnote';

describe('Can Construct Ransom Note', () => {
  test('Wrong letters present', () => {
    expect(canConstruct('a','b')).toBe(false);
  });

  test('Correct letters present, but insufficient', () => {
    expect(canConstruct('aa','ab')).toBe(false);
  });

  test('Sufficient correct letters present', () => {
    expect(canConstruct('aa','aab')).toBe(true);
  });
});
