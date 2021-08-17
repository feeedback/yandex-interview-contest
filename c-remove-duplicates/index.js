const readline = require('readline');
const fs = require('fs');

module.exports = () => {
  // delete upper line exports for contest
  const input = fs.createReadStream(`${__dirname}/input.txt`);
  const output = fs.createWriteStream(`${__dirname}/output.txt`);
  const rl = readline.createInterface({ input, terminal: false });

  let hackOutputPart = '';

  rl.once('line', () => {
    let lastItem = null;

    rl.on('line', (lineRaw) => {
      const line = lineRaw.toString().trim();

      if (line !== lastItem) {
        hackOutputPart += `${line}\n`;
      }

      if (hackOutputPart.length > 1000) {
        output.write(`${hackOutputPart}\n`);
        hackOutputPart = '';
      }
      lastItem = line;
    });

    rl.on('close', () => {
      output.write(hackOutputPart);
    });
  });
};
