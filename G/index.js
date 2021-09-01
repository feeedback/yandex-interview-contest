function getDistanceBetween(a, b) {
  const [x1, y1] = a;
  const [x2, y2] = b;

  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function bfs(startKey, finishKey, keysCount, fnCheckEdgeExist) {
  const visited = new Set();
  const queue = [[startKey, 0]];
  visited.add(startKey);

  while (queue.length > 0) {
    const [currentKey, count] = queue.shift();

    if (currentKey === finishKey) {
      return count;
    }

    for (let key = 0; key < keysCount; key++) {
      // вместо графа используем простой цикл, т.к. "Дороги есть между всеми парами городов."
      if (!visited.has(key) && fnCheckEdgeExist(currentKey, key)) {
        queue.push([key, count + 1]);
        visited.add(key);
      }
    }
  }
  return -1;
}

function inputProcessing(lines) {
  const cityN = Number(lines[0]); // (2 ≤ n ≤ 1000)
  const citiesXY = lines.slice(1, cityN + 1).map((yx) => yx.split(' ').map(Number));

  const maxDistance = Number(lines[cityN + 1]); // >= 1
  const [fromCityIndex, toCityIndex] = lines[cityN + 1 + 1].split(' ').map((n) => Number(n) - 1); // >= 1

  if (fromCityIndex === toCityIndex) {
    return 0;
  }

  return bfs(
    fromCityIndex,
    toCityIndex,
    cityN,
    (keyA, keyB) => getDistanceBetween(citiesXY[keyA], citiesXY[keyB]) <= maxDistance
  );
}

// Решение

// Построение графа можно пропустить, и заменить список связности простым перебором всех городов, т.к. "Дороги есть между всеми парами городов."
// Вначале из имеющихся точек нужно построить граф.
// Для этого переберем все пары точек и, если расстояние между ними меньше заданного ограничения,
// добавим в граф ребро между вершинами.

// После построения графа запустим поиск в ширину из города, откуда Петя начинает свое путешествие.

// Как только он достигнет точки назначения, завершим наш алгоритм и выведем количество пройденных
// нами ребер.
// Если алгоритм завершился, а мы так и не достигли пункта назначения, то он недостижим из
// исходного города, поэтому следует вывести -1.

// Общая сложность описанного алгоритма — O(n^2), где n — число городов.
module.exports = inputProcessing;
