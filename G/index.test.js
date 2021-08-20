const inputProcessing = require('./index');

const testData = [
  [['4', '0 0', '1 0', '0 1', '1 1', '2', '1 4'], 1],
  [['7', '0 0', '0 2', '2 2', '0 -2', '2 -2', '2 -1', '2 1', '2', '1 5'], 2], //  №1
  [['4', '0 0', '2 0', '0 2', '2 2', '1', '1 4'], -1], // №3
  [['3', '3 0', '0 0', '1 0', '2', '1 1'], 0], // 2 test start = finish
  [['3', '3 0', '0 0', '1 0', '3', '1 1'], 0], // 2 test start = finish
  [['3', '3 0', '0 0', '1 0', '1', '1 1'], 0], // -1 test start = finish
  //
];

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    expect(inputProcessing(input)).toStrictEqual(output);
  });
});
