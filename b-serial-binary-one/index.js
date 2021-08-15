function inputProcessing(lines) {
  // const [, ...items] = lines;
  const [sizeRaw = 0, ...items] = lines;
  const size = Number(sizeRaw);

  let max = 0;
  let count = 0;

  for (let idx = 0; idx < size; idx += 1) {
    if (Number(items[idx]) === 1) {
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

module.exports = inputProcessing;
