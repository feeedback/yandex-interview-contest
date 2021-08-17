const readline = require('readline');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
const rl = readline.createInterface({ input, terminal: false });

let outputLines = '';

const generate = (pairs, line = '', left = 0, right = 0) => {
  if (left === pairs && right === pairs) {
    outputLines += `${line}\n`;

    if (outputLines.length > 1000) {
      output.write(outputLines);
      outputLines = '';
    }
  } else {
    if (left < pairs) generate(pairs, `${line}(`, left + 1, right);
    if (right < left) generate(pairs, `${line})`, left, right + 1);
  }

  return outputLines;
};

rl.once('line', (line) => {
  generate(Number(line));

  output.write(outputLines);
});
