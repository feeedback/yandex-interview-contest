function calcMaxSeqDigit(digit, size, items) {
  let max = 0;
  let count = 0;

  for (let idx = 0; idx < size; idx += 1) {
    if (items[idx] === digit) {
      count += 1;

      if (count > max) {
        max = count;
      }
    } else {
      count = 0;
    }
  }

  return max;
}

function inputProcessing(lines) {
  // const [, ...items] = lines;
  const [sizeRaw = 0, ...items] = lines;
  const size = Number(sizeRaw);

  return calcMaxSeqDigit('1', size, items);
}

module.exports = inputProcessing;
