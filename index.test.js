const padora = require('./index');

test('padora should replace placeholders with data values', () => {
  const template = "This is {inner.1.2.test} value , it can work with {inner.1.2.array[0]} {inner.1.2.array[1]} , and it is amazing {example}";
  const data = {
    example: "example",
    inner: {
      1: {
        2: {
          test: "innerExample",
          array: ['array', 'values'],
        },
      },
    },
  };
  const expected = "This is innerExample value , it can work with array values , and it is amazing example";

  const result = padora({ template, data });
  expect(result).toBe(expected);
});

test('padora should handle templates without placeholders', () => {
  const template = "This is a static template without placeholders";
  const data = { example: "example" };
  const result = padora({ template, data });
  expect(result).toBe(template);
});

test('padora should handle missing data values', () => {
  const template = "This is a {missing} value";
  const data = { example: "example" };
  const expected = "This is a {missing} value";
  const result = padora({ template, data });
  expect(result).toBe(expected);
});

test('padora should handle different data types', () => {
  const template = "Value: {string} Number: {number} Boolean: {boolean} Array: {array}";
  const data = {
    string: "string",
    number: 123,
    boolean: true,
    array: [1, 2, 3],
  };
  const expected = "Value: string Number: 123 Boolean: true Array: 1,2,3";
  const result = padora({ template, data });
  expect(result).toBe(expected);
});

test('padora should handle missing keys in data object', () => {
  const template = "This is {missing.key} value";
  const data = { example: "example" };
  const expected = "This is {missing.key} value";
  const result = padora({ template, data });
  expect(result).toBe(expected);
});

test('padora should handle array elements', () => {
  const template = "Array elements: {array[0]} {array[1]}";
  const data = {
    array: ["first", "second"],
  };
  const expected = "Array elements: first second";
  const result = padora({ template, data });
  expect(result).toBe(expected);
});

test('padora should handle invalid placeholders', () => {
  const template = "This is {invalid[0} value , it can work with {inner.1.2.array[} , and it is amazing {example}";
  const data = {
    example: "example",
    inner: {
      1: {
        2: {
          test: "innerExample",
          array: ['array', 'values'],
        },
      },
    },
  };
  const expected = "This is {invalid[0} value , it can work with {inner.1.2.array[} , and it is amazing example";
  const result = padora({ template, data });
  expect(result).toBe(expected);
});
