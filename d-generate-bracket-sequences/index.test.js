const testData = [
  [[2], ['(())', '()()']],
  [[3], ['((()))', '(()())', '(())()', '()(())', '()()()']],
];

const fs = require('fs');
const path = require('path');
const inputProcessing = require('./index');

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
      .filter(Boolean);

    expect(outputFromFile).toStrictEqual(output);
  });
});
