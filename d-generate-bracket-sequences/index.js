const readline = require('readline');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
const rl = readline.createInterface({ input, terminal: false });

let outputLines = '';

const generate = (length, str = '', left = 0, right = 0) => {
  if (str.length >= 2 * length) {
    outputLines += `${str}\n`;

    if (outputLines.length > 1000) {
      output.write(outputLines);
      outputLines = '';
    }

    return;
  }

  if (left < length) {
    generate(length, `${str}(`, left + 1, right);
  }
  if (right < left) {
    generate(length, `${str})`, left, right + 1);
  }
};

function generateBrackets(length) {
  generate(length);

  output.write(outputLines);

  return outputLines.split('\n').slice(0, -1);
}

rl.once('line', (line) => {
  const n = Number(line);

  generateBrackets(n);
});

module.exports = generateBrackets;
