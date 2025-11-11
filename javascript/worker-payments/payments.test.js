const payment = require('./payments')


test('returns 15000 for s4 for 1hr', () => {
    expect(payment('s4', 1)).toBe(15000)
});

test('returns 75000 for s4 for 5hrs', () => {
    expect(payment('s4', 5)).toBe(75000)
});


test('returns 25000 for s6 for 1hrs', () => {
    expect(payment('s6', 1)).toBe(25000)
});

test('returns 250000 for s6 for 10hrs', () => {
    expect(payment('s6', 10)).toBe(250000)
});

test('returns 35000 for univ for 1hr', () => {
    expect(payment('univ', 1)).toBe(35000)
});

test('returns 70000 for univ for 2hrs', () => {
    expect(payment('univ', 2)).toBe(70000)
});
