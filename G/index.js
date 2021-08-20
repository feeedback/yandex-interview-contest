// Решение

// Вначале из имеющихся точек нужно построить граф.

// Для этого переберем все пары точек и, если расстояние между ними меньше заданного ограничения,
// добавим в граф ребро между вершинами.

// После построения графа запустим поиск в ширину из города, откуда Петя начинает свое путешествие.

// Как только он достигнет точки назначения, завершим наш алгоритм и выведем количество пройденных
// нами ребер.
// Если алгоритм завершился, а мы так и не достигли пункта назначения, то он недостижим из
// исходного города, поэтому следует вывести -1.

// Общая сложность описанного алгоритма — O(n^2), где n — число городов.

function inputProcessing(lines) {
  const cityN = Number(lines[0]); // (2 ≤ n ≤ 1000)
  const citiesXY = lines.slice(1, cityN + 1).map((yx) => yx.split(' ').map(Number));

  const maxDistance = Number(lines[cityN + 1]); // >= 1
  const [fromCityIndex, toCityIndex] = lines[cityN + 1 + 1].split(' ').map((n) => Number(n) - 1); // >= 1

  const getDistance = (a, b) => {
    const [x1, y1] = a;
    const [x2, y2] = b;
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  };

  function bfs(startKey, finishKey) {
    const visited = new Set();
    const queue = [[startKey, 0]];
    visited.add(startKey);

    while (queue.length > 0) {
      const [currentKey, count] = queue.shift();

      if (currentKey === finishKey) {
        return count;
      }

      for (let key = 0; key < cityN; key++) {
        if (!visited.has(key) && getDistance(citiesXY[currentKey], citiesXY[key]) <= maxDistance) {
          queue.push([key, count + 1]);
          visited.add(key);
        }
      }
    }
    return -1;
  }

  return bfs(fromCityIndex, toCityIndex);
}

console.log(inputProcessing(['7', '0 0', '0 2', '2 2', '0 -2', '2 -2', '2 -1', '2 1', '2', '1 5'])); // 2  №1
console.log(inputProcessing(['4', '0 0', '1 0', '0 1', '1 1', '2', '1 4'])); // 1  №2
console.log(inputProcessing(['4', '0 0', '2 0', '0 2', '2 2', '1', '1 4'])); // -1  №3
console.log(inputProcessing(['3', '3 0', '0 0', '1 0', '2', '1 1'])); // 2 test start = finish
console.log(inputProcessing(['3', '3 0', '0 0', '1 0', '3', '1 1'])); // 2 test start = finish
console.log(inputProcessing(['3', '3 0', '0 0', '1 0', '1', '1 1'])); // -1 test start = finish
