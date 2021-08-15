const readline = require('readline');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
const rl = readline.createInterface({ input, terminal: false });

rl.once('line', () => {
    const count = Array(101).fill(0);

    rl.on('line', (line) => {
        const list = line.split(' ');

        for (let i = 1; i < list.length; i++) {
            count[list[i]] += 1;
        }
    });

    rl.on('close', () => {
        let result = '';

        for (let i = 0; i < count.length; i++) {
            if (count[i] === 0) {
                continue;
            }

            result = `${i} `.repeat(count[i]);
            output.write(result);
        }
    });
});
