const readline = require('readline');
const fs = require('fs');
const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
const rl = readline.createInterface({ input, terminal: false });

const lines = [];

rl.on('line', line => {
    lines.push(line);
});

rl.on('close', () => {
    const [str1, str2] = lines;
    output.write(areAnagrams(str1, str2).toString());
});

function dictFromString(str = '') {
    let dict = {};

    for (let ch of str) {
        dict[ch] = dict[ch] + 1 || 1;
    }

    return dict;
}

function areAnagrams(str1 = '', str2 = '') {
    if (str1.length !== str2.length) {
        return 0;
    }

    const dict1 = dictFromString(str1);
    const dict2 = dictFromString(str2);

    if (Object.keys(dict1).length !== Object.keys(dict2).length) {
        return 0;
    }

    for (let ch in dict1) {
        if (dict1[ch] !== dict2[ch]) {
            return 0;
        }
    }

    return 1;
}

module.exports = areAnagrams;
