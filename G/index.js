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

  const paths = [];
  const adjacencyList = {};
  for (let i = 0; i < cityN; i++) {
    paths[i] = new Array(cityN).fill(0);
    adjacencyList[i] = [];

    // for (let j = i + 1; j < cityN; j++) {
    for (let j = 0; j < cityN; j++) {
      if (i === j) {
        continue;
      }
      const [x1, y1] = citiesXY[i];
      const [x2, y2] = citiesXY[j];
      const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);

      if (dist <= maxDistance) {
        adjacencyList[i].push(j);
      }
      paths[i][j] = dist;
    }
  }

  function bfs(startKey, finishKey) {
    const visited = new Set();
    const queue = [startKey];
    const counts = { [startKey]: 0 };

    while (queue.length > 0) {
      const node = queue.shift();
      const destinations = adjacencyList[node];

      for (const destination of destinations) {
        counts[destination] = counts[node] + 1;

        if (destination === finishKey) {
          visited.add(destination);
          return counts[destination];
        }

        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push(destination);
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
