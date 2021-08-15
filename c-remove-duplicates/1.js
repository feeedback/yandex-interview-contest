const readline = require('readline');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
const rl = readline.createInterface({ input, terminal: false });

let hackOutputPart = '';

rl.once('line', () => {
  let lastItem = null;

  rl.on('line', (lineRaw) => {
    const line = lineRaw.toString().trim();

    if (line !== lastItem) {
      hackOutputPart += `${line}\n`;
    }

    if (hackOutputPart.length > 100) {
      output.write(`${hackOutputPart}\n`);
      hackOutputPart = '';
    }
    lastItem = line;
  });

  rl.on('close', () => {
    output.write(`${hackOutputPart}\n`);
  });
});
