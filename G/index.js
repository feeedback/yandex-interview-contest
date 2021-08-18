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
  const maxDistance = Number(lines[cityN + 1]); // > 0
  const [fromCityIndex, toCityIndex] = lines[cityN + 1 + 1].split(' ').map((n) => Number(n) - 1);
  if (fromCityIndex === toCityIndex) {
    return 0;
  }
  // console.log({ cityN, citiesXY, maxDistance, fromCityIndex, toCityIndex });

  const paths = [];

  for (let i = 0; i < cityN; i++) {
    paths[i] = new Array(cityN).fill(0);

    for (let j = i + 1; j < cityN; j++) {
      const [x1, y1] = citiesXY[i];
      const [x2, y2] = citiesXY[j];

      paths[i][j] = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }
  }

  // console.log({ paths });

  const visited = new Map();
  // const minToFinishPath = [];
  let minToFinish = Infinity;

  const recur = (current, path, ways) => {
    visited.set(current, true);

    const distToFinish = paths[Math.min(current, toCityIndex)][Math.max(current, toCityIndex)];
    // console.log('to finish need', distToFinish, 'but max', maxDistance);

    if (distToFinish <= maxDistance) {
      const pathEnd = [...path, toCityIndex];
      // console.log('finish');
      // console.log('last step', { current, toCityIndex, distToFinish, pathEnd });
      // minToFinishPath.push(pathEnd);

      if (pathEnd.length < minToFinish) {
        minToFinish = pathEnd.length;
      }
      return true;
    }

    for (let index = 0; index < cityN; index++) {
      if (index !== toCityIndex && !visited.get(index)) {
        const dist = paths[Math.min(current, index)][Math.max(current, index)];

        if (path.length < minToFinish && dist <= maxDistance) {
          // console.log({ current, index, dist, path });
          visited.set(index, true);
          // console.log(path);
          const isFinish = recur(index, [...path, index], ways - 1);

          if (isFinish) {
            // const last = path.pop();
            path.pop();
            // console.log({ last, index });
            visited.set(index, false);
          }
        }
      }
    }
    // console.log(path);
    return false;
    // recur(current, [...path], ways - 1, visited);
    // console.log('цикл кончился');
  };

  recur(fromCityIndex, [fromCityIndex], cityN);
  // console.log(minToFinish, minToFinishPath);

  return minToFinish === Infinity ? -1 : minToFinish - 1;
}
// console.log(inputProcessing(['7', '0 0', '0 2', '2 2', '0 -2', '2 -2', '2 -1', '2 1', '2', '1 3'])); // 1 - 2
// console.log(inputProcessing(['4', '0 0', '1 0', '0 1', '1 1', '2', '1 4'])); // 2 - 1
// console.log(inputProcessing(['4', '0 0', '2 0', '0 2', '2 2', '1', '1 4'])); // 3 - -1
console.log(inputProcessing(['2', '3 0', '0 0', '3', '1 2'])); // ?
