const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const result = [];
let lineCount = 0;

rl.once('line', (line1) => {
  let lastItem = null;
  const length = Number(line1.toString().trim());

  rl.on('line', (lineRaw) => {
    const line = lineRaw.toString().trim();
    if (lineCount < length && line !== lastItem) {
      result.push(result);
      lastItem = line;
    }
    lineCount += 1;
  });
});

rl.on('close', () => {
  process.stdout.write(Array.isArray(result) ? result.join('\n') : String(result));
});

