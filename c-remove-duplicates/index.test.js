const inputProcessing = require('./index');

const testData = [
  [
    ['5', '2', '4', '8', '8', '8'],
    [2, 4, 8],
  ],
  [
    ['5', '2', '2', '2', '8', '8'],
    [2, 8],
  ],
];

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    expect(inputProcessing(input)).toStrictEqual(output);
  });
});
