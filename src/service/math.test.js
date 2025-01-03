const math = require('./math')

describe('test add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(math.add(1, 2)).toBe(3);
  });

  test('adds 2 + 2 to equal 4', () => {
    expect(math.add(2, 2)).toBe(4);
  });

  test('adds -2 + 2 to equal 0', () => {
    expect(math.add(-2, 2)).toBe(0);
  });
});

describe('test subtract function', () => {
  test('subtract 1 + 2 to equal 3', () => {
    expect(math.subtract(1, 2)).toBe(-1);
  });
});

describe('test multi function', () => {
  test('multiply 1 * 2 to equal 2', () => {
    expect(math.multiply(1, 2)).toBe(2);
  });
});

describe('test divide function', () => {
  test('divide 1 / 2 to equal 0.5', () => {
    expect(math.divide(1, 2)).toBe(0.5);
  });
});