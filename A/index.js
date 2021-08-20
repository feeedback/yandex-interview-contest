function stoneJewelryCalc(jewels = 0, stones = 0) {
  let stoneJewelryCount = 0;
  const jewelsSet = new Set(jewels);

  for (let index = 0; index < stones.length; index++) {
    if (jewelsSet.has(stones.charAt(index))) {
      stoneJewelryCount += 1;
    }
  }
  return stoneJewelryCount;
}

function inputProcessing(lines) {
  const [jewels, stones] = lines;

  return stoneJewelryCalc(jewels, stones);
}

module.exports = inputProcessing;
