const inputProcessing = require('./index');

const testData = [
  [2, ['(())', '()()']],
  [3, ['((()))', '(()())', '(())()', '()(())', '()()()']],
];

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    expect(inputProcessing(input)).toStrictEqual(output);
  });
});
