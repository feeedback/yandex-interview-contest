const readline = require('readline');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
const rl = readline.createInterface({ input, terminal: false });

let result = '';

rl.once('line', () => {
    let lastItem;

    rl.on('line', (line) => {
        if (line !== lastItem) {
            result += `${line}\n`;
        }
        if (result.length > 100) {
            output.write(`${result}\n`);
            result = '';
        }
        lastItem = line;
    });

    rl.on('close', () => {
        output.write(`${result}\n`);
    });
});
