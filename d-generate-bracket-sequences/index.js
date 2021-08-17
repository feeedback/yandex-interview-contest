/* eslint-disable default-case */
const readline = require('readline');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
const rl = readline.createInterface({ input, terminal: false });

const createBrackets = (arr) => {
  let str = '';

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 0) {
      str += '(';
    } else if (arr[index] === 1) {
      str += ')';
    }
  }
  return str;
};

const isValidSeq = (arr) => {
  let countOpen = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      countOpen -= 1;

      if (countOpen === 0) {
        return false;
      }
    } else {
      countOpen += 1;
    }
  }
  return countOpen === 0;
};

const generate = (n) => {
  let outputLines = [];

  const length = n * 2;
  const max = 2 ** length - 1;

  const bits = new Array(length).fill(0);

  const incBinaryNum = () => {
    for (let i = length - 1; i >= 0; i--) {
      if (bits[i] === 0) {
        bits[i] = 1;
        break;
      }
      if (bits[i] === 1) {
        bits[i] = 0;
      }
    }
  };

  for (let num = 0; num < max; num++) {
    if (isValidSeq(bits)) {
      outputLines.push(createBrackets(bits));

      if (outputLines.length > 100) {
        // hack for memory limit
        output.write(`${outputLines.join('\n')}\n`);
        outputLines = [];
      }
    }
    incBinaryNum();
  }

  return outputLines;
};

rl.once('line', (line) => {
  const outputLines = generate(Number(line));

  output.write(`${outputLines.join('\n')}\n`);
});

// generate(3);
module.exports = generate;
