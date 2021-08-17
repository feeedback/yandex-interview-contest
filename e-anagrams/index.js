const readline = require('readline');
const fs = require('fs');

module.exports = () => {
  // delete upper line exports for contest
  const input = fs.createReadStream(`${__dirname}/input.txt`);
  const output = fs.createWriteStream(`${__dirname}/output.txt`);
  const rl = readline.createInterface({ input, terminal: false });

  function dictFromString(str = '') {
    const dict = new Map();

    for (const char of str) {
      dict.set(char, dict.get(char) + 1 || 1);
    }

    return dict;
  }

  function areAnagrams(str1 = '', str2 = '') {
    if (str1.length !== str2.length) {
      return 0;
    }

    const dict1 = dictFromString(str1);
    const dict2 = dictFromString(str2);

    if (dict1.size !== dict2.size) {
      return 0;
    }

    for (const [char, dict1Count] of dict1) {
      if (dict1Count !== dict2.get(char)) {
        return 0;
      }
    }

    return 1;
  }

  const lines = [];

  rl.on('line', (line) => {
    lines.push(line);
  });

  rl.on('close', () => {
    const [str1, str2] = lines;

    output.write(String(areAnagrams(str1, str2)));
  });
};
