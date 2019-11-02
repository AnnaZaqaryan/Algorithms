const alg = require('./algorithms')

test('factorial recursiv of 5 is 120', () => {
  expect(alg.factorialRec(5)).toBe(120);
});

test('factorial of 5 is 120', () => {
  expect(alg.factorial(5)).toBe(120);
});


test('Bubble sort test', () => {
  const testArray = [3, 1, 6, 8];
  alg.bubbleSort(testArray);
  expect(testArray).toEqual([1, 3, 6, 8]);
});

test('Bubble sort test 2', () => {
  const testArray = [-1, -1, 60, -8];
  alg.bubbleSort(testArray);
  expect(testArray).toEqual([-8, -1, -1, 60]);
});

test('Filter test', () => {
  const testArray = [5, 7, -1, 8, -10];
  const afterFilter = alg.filter(testArray, e => e > 0);
  expect(afterFilter).toEqual([5, 7, 8]);
});

test('Test reversArray', () => {
  const testArray = [1, 3, 50, 6];
  alg.reversArray(testArray);
  expect(testArray).toEqual([6, 50, 3, 1]);
});

test('Fibonacci ', () => {

  expect(alg.fibonacci(7)).toBe(13);
});

test('palidrom test ', () => {
  expect(alg.palidrom("abba")).toBe(true);
  expect(alg.palidrom("aabb")).toBe(false);
});

test('maxInArray test ', () => {

  const testArray = [3, -1, 51, 8];
  const res = alg.maxInArray(testArray);
  expect(res).toBe(51);
});



