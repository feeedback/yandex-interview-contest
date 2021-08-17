// const readline = require('readline');
// const fs = require('fs');

// const input = fs.createReadStream('input.txt');
// const output = fs.createWriteStream('output.txt');
// const rl = readline.createInterface({ input, terminal: false });
const isValidSeq = (s) => {
  let countOpen = 0;

  for (let i = 0; i < s.length; i++) {
    // const char = s[i];
    // console.log({ char });
    if (!Number(s[i])) {
      if (countOpen === 0) return false;
    } else {
      countOpen += 1;
    }
  }
  return countOpen === 0;
};

const generate = (n) => {
  console.time();
  const outputLines = [];

  const length = n * 2;
  // console.log(outputLines);

  // if (str.length >= 2 * length) {
  //   outputLines.push(str);

  //   // if (outputLines.length > 1000) {
  //   //   output.write(`${outputLines.join('\n')}\n`);
  //   // }

  //   return;
  // }
  const min = 2 ** (length - 1);
  const max = 2 ** length;

  for (let num = min; num < max; num++) {
    // const bit = num.toString(2);
    const bit = num.toString(2);
    // if (isValidSeq(bit)) {
    // outputLines.push(bit.replaceAll('1', '(').replaceAll('0', ')'));
    // }
    // console.log({ num, bit });
  }
  // if (left < length) {
  //   generate(length, `${str}(`, left + 1, right);
  // }
  // if (right < left) {
  //   generate(length, `${str})`, left, right + 1);
  // }

  console.timeEnd();
  return outputLines;
};

// function generateBrackets(length) {
//   generate(length);

//   output.write(outputLines.join('\n'));

//   return outputLines;
// }

// rl.once('line', (line) => {
//   const n = Number(line);

//   generateBrackets(n);
// });
generate(11);
// module.exports = generateBrackets;
