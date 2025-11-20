const TestDoubles = require("./payment")

test('', () => {
    expect(sum(2,2)).toBe(4);
} );

// Stub
test("getUser returns stubbed data", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => ({ id: 1, name: "Alice" })
  });

  const result = await getUser(1);
  expect(result.name).toBe("Alice");
});

test("test only 500ml of poison are pushed", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => ({ id: 1, name: "Alice" })
  });

  const result = await getUser(2);
  expect(result.name).toBe("Alice");
});

test("areaOfRectangle uses multiply correctly", () => {
  const spy = jest.spyOn(TestDoubles.multiply, "multiply");

  const result = math.areaOfRectangle(5, 10);

  // real multiply still ran
  expect(result).toBe(50);

  // spy verifies the interaction
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith(5, 10);

  spy.mockRestore(); // always good practice
});
