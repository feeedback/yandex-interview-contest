const inputProcessing = require('./index');

const testData = [
  [['4', '0 0', '1 0', '0 1', '1 1', '2', '1 4'], 1],
  //
];

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    expect(inputProcessing(input)).toStrictEqual(output);
  });
});
