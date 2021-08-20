const inputProcessing = require('./index');

const testData = [
  [['ab', 'aabbccd'], 4],
  [['ab', 'aaaaaaa'], 7],
  [['ab', 'ccccddd'], 0],
];

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    expect(inputProcessing(input)).toStrictEqual(output);
  });
});
