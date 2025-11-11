const fizzbuzz = require('./fizzbuzz')


test('returns fizz when for 1', () => {
    expect(fizzbuzz(1)).toBe('fizz')
});

test('returns buzz when for 2', () => {
    expect(fizzbuzz(2)).toBe('buzz')
});

test('returns buzz when for 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
});

test('returns buzz when for 1000', () => {
    expect(fizzbuzz(1000)).toBe('buzz')
});

test('returns buzz when for 1000000000', () => {
    expect(fizzbuzz(1000000000)).toBe('buzz')
});

test('returns buzz when for 1000000001', () => {
    expect(fizzbuzz(1000000001)).toBe('fizz')
});
