const fs = require('fs');
const path = require('path');
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

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

afterAll(async () => {
  fs.promises.unlink(path.join(__dirname, 'input.txt')).catch();
  fs.promises.unlink(path.join(__dirname, 'output.txt')).catch();
});

testData.forEach(([input, output], index) => {
  test(`${index + 1}`, async () => {
    fs.writeFileSync(path.join(__dirname, 'input.txt'), input.join('\n'));

    inputProcessing();
    await wait(50);

    const outputFromFile = String(fs.readFileSync(path.join(__dirname, 'output.txt'), 'utf-8'))
      .split('\n')
      .filter(Boolean)
      .map(Number);

    expect(outputFromFile).toStrictEqual(output);
  });
});
