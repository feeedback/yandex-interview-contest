const readline = require('readline');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const rl = readline.createInterface({ input, terminal: false });

function generateBrackets(n) {
  const output = fs.createWriteStream('output.txt');
  let result = '';

  function generate(n, str = '', l = 0, r = 0) {
    if (str.length >= 2 * n) {
      result += `${str}\n`;

      if (result.length > 100) {
        output.write(result);
        result = '';
      }

      return;
    }

    if (l < n) {
      generate(n, `${str}(`, l + 1, r);
    }

    if (r < l) {
      generate(n, `${str})`, l, r + 1);
    }
  }

  generate(n);

  output.write(result);
  output.end();

  output.on('finish', () => {});

  return result.split('\n').slice(0, -1);
}

rl.once('line', (line) => {
  const n = Number(line);

  generateBrackets(n);
});

module.exports = generateBrackets;
