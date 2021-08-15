function inputProcessing(lines) {
  const [jewels, stones] = lines;

  let stoneJewelryCount = 0;
  const jewelsSet = new Set(jewels);

  for (let index = 0; index < stones.length; index++) {
    if (jewelsSet.has(stones.charAt(index))) {
      stoneJewelryCount += 1;
    }
  }
  return stoneJewelryCount;
}

module.exports = inputProcessing;
