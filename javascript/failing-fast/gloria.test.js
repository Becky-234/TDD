const sum = require('./gloria')


test('check that the function adds two numbers', () => {
    expect(sum(2,2)).toBe(4);
} );
