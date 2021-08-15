const readline = require('readline');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
const rl = readline.createInterface({ input, terminal: false });

let lineCount = 0;
let hackOutputPart = '';

rl.once('line', (line1) => {
  let lastItem = null;
  const length = Number(line1.toString().trim());

  rl.on('line', (lineRaw) => {
    const line = lineRaw.toString().trim();

    if (lineCount < length && line !== lastItem) {
      hackOutputPart += `${line}\n`;

      lastItem = line;
    }
    if (hackOutputPart.length > 100) {
      output.write(`${hackOutputPart}\n`);
      hackOutputPart = '';
    }
    lineCount += 1;
  });
});

// rl.on('close', () => {
//   // console.log({ result });
//   // process.stdout.write(Array.isArray(result) ? result.join('\n') : String(result));
// });
// (async () => {
//   // const inputLines = await input(1);
//   const inputLines = fs.readFileSync('input.txt', 'utf8').split('\r\n');
//   // const inputLines = ['3', 'Hello Hi', 'Bye Goodbye', 'List Array', 'Goodbye'];
//   // const inputLines = input;
//   console.log({ inputLines });
//   const outputLines = inputProcessing(inputLines);
//   console.log({ outputLines });
//   // output(outputLines);
// })();
