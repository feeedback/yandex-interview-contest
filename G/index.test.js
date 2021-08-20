const inputProcessing = require('./index');

const testData = [
  [['7', '0 0', '0 2', '2 2', '0 -2', '2 -2', '2 -1', '2 1', '2', '1 5'], 2], // №1
  [['4', '0 0', '1 0', '0 1', '1 1', '2', '1 4'], 1], // №2
  [['4', '0 0', '2 0', '0 2', '2 2', '1', '1 4'], -1], // №3

  [['3', '3 0', '0 0', '1 0', '2', '1 1'], 0], // test start = finish, если нельзя в ту же точку, то - 2
  [['3', '3 0', '0 0', '1 0', '3', '1 1'], 0], // test start = finish, если нельзя в ту же точку, то - 2
  [['3', '3 0', '0 0', '1 0', '1', '1 1'], 0], // test start = finish, если нельзя в ту же точку, то - -1
  //
];

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, () => {
    expect(inputProcessing(input)).toStrictEqual(output);
  });
});
