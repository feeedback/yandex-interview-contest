const inputProcessing = require('./index');

const testData = [
  [['friend', 'finder'], 1],
  [['cat', 'car'], 0],
  [['af', 'cd'], 0],
];

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    expect(inputProcessing(input)).toStrictEqual(output);
  });
});
