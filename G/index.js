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

/*
def bfs(s, adj):
    # Тут храним стоимость прохода до вершины
    cost = [-1] * len(adj)
    # 'Стоимость' пути s -> s = 0
    cost[s] = 0
    queue = [s]

    while queue:
        v = queue.pop(0)

        # запускаем обход из вершины v
        for w in adj[v]:
            # проверка на то что уже посещали
            if cost[w] == -1:
                # добавление вершины в очередь
                queue.append(w)
                # подсчитываем стоимость пути до вершины
                cost[w] = cost[v] + 1


adj = [
#список смежности
    [1,3], # 0
    [0,3,4,5], # 1
    [4,5], # 2
    [0,1,5], # 3
    [1,2], # 4
    [1,2,3] # 5
]

cost = bfs(0, adj)
# Выведем 'стоимость' пути из вершины 0 в 2
# Если cost[u] = -1, значит, вершина u недостижима из стартовой вершины
print(cost[2])
*/

// const readline = require('readline');
// const fs = require('fs');

// module.exports = () => {
// delete upper line exports for contest
// const input = fs.createReadStream(`${__dirname}/input.txt`);
// const output = fs.createWriteStream(`${__dirname}/output.txt`);
// const rl = readline.createInterface({ input, terminal: false });

// при условии, что мы имеем дело со смежным списком
// например, таким: adj = {A:[B,C,D], B:[E,F], ... }
// const adj = { [1, 2, 3, 4};
// const graph = {
//   1: { name: 1 },
//   2: { name: 2 },
//   3: { name: 3 },
//   4: { name: 4 },
// };

// const adj = {
//   1: [graph[2], graph[3], graph[4]],
//   2: [graph[1], graph[3], graph[4]],
//   3: [graph[1], graph[2], graph[4]],
//   4: [graph[1], graph[2], graph[3]],
// };
// function bfs(toplivo, _adj, _graph, startN, finishN) {
//   const start = _graph[startN];
//   const finish = _graph[finishN];

//   // adj - смежный список
//   // start - начальная вершина
//   // finish - пункт назначения

//   // инициализируем очередь
//   const queue = [];
//   // добавляем s в очередь
//   queue.push(start);
//   // помечаем start как посещенную вершину во избежание повторного добавления в очередь
//   start.visited = true;

//   while (queue.length > 0) {
//     // удаляем первый (верхний) элемент из очереди
//     const current = queue.shift();
//     // adj[current] - соседи current

//     for (const neighbor of _adj[current.name]) {
//       // if (neighbor.name === current.name) {
//       //   continue;
//       // }
//       console.log(neighbor.name);

//       if (!neighbor.visited) {
//         queue.push(neighbor); // добавляем его в очередь
//         neighbor.visited = true; // помечаем вершину как посещенную

//         if (neighbor.name === finish.name) {
//           // если сосед является пунктом назначения, мы победили
//           console.log('Нашли финиш', queue);
//           return true;
//         }
//       }
//     }
//   }
//   // если finish не обнаружено, значит пункта назначения достичь невозможно
//   return -1;
// }
// function traverseBFS(root) {
//   const queue = [root];
//   const res = [];

//   while (queue.length) {
//     const curr = queue.shift();
//     res.push(curr.key);

//     if (curr.right) {
//       queue.push(curr.right);
//     }

//     if (curr.left) {
//       queue.push(curr.left);
//     }
//   }

//   return res;
// }

// bfs(2, adj, graph, 1, 4);

function inputProcessing(lines) {
  // ["4", "0 0", "1 0", "0 1", "1 1", "2", "1 4"]

  const cityN = Number(lines[0]);

  const citiesXY = lines.slice(1, cityN + 1).map((yx) => yx.split(' ').map(Number));
  const maxDistance = Number(lines[cityN + 1]);
  const [fromCityIndex, toCityIndex] = lines[cityN + 1 + 1].split(' ').map((n) => Number(n) - 1);

  console.log({ cityN, citiesXY, maxDistance, fromCityIndex, toCityIndex });

  const paths = [];

  for (let i = 0; i < cityN; i++) {
    paths[i] = new Array(cityN).fill(0);

    for (let j = i + 1; j < cityN; j++) {
      console.log({ i, j });

      const [x1, y1] = citiesXY[i];
      const [x2, y2] = citiesXY[j];

      paths[i][j] = Math.abs(x1 - x2) + Math.abs(y1 - y2);

      // if (i === fromCityIndex && j === toCityIndex) {
      //   console.log('query way, m:', paths[i][j]);
      //   if (paths[i][j] <= maxDistance) {
      //     console.log('max way = 1');
      //   }
      // }
    }
  }
  const queryDistance = paths[fromCityIndex][toCityIndex];

  console.log('query way, m:', queryDistance);
  if (queryDistance <= maxDistance) {
    console.log('max way = 1');
  }

  console.log({ paths });

  const visited = new Map();

  const recur = (current, path, ways) => {
    // console.log('new recur', { current, path, ways, visited });
    visited.set(current, true);

    const distToFinish = paths[Math.min(current, toCityIndex)][Math.max(current, toCityIndex)];
    console.log('to finish need', distToFinish, 'but max', maxDistance);

    if (distToFinish <= maxDistance) {
      console.log('finish');
      console.log('last step', { current, toCityIndex, distToFinish, path });
      return [...path, toCityIndex];
    }

    for (let index = 0; index < cityN; index++) {
      if (index !== toCityIndex && !visited.get(index)) {
        const dist = paths[Math.min(current, index)][Math.max(current, index)];
        if (dist <= maxDistance) {
          console.log({ current, index, dist, path });
          visited.set(index, true);
          // console.log(path);
          return recur(index, [...path, index], ways - 1);
        }
      }
    }
    // console.log(path);
    return -1;
    // recur(current, [...path], ways - 1, visited);
    // console.log('цикл кончился');
  };
  return recur(fromCityIndex, [fromCityIndex], cityN);
  // const set1 = new Set(lines.slice(1, cityN + 1).map(Number));

  // let stoneJewelryCount = 0;
  // const jewelsSet = new Set(jewels);

  // for (let index = 0; index < stones.length; index++) {
  //   if (jewelsSet.has(stones.charAt(index))) {
  //     stoneJewelryCount += 1;
  //   }
  // }
  // return stoneJewelryCount;
}
// console.log(inputProcessing(['4', '0 0', '1 1', '1 0', '1 2', '1', '1 4']));
// [
//   [0, 1, 1, 2],
//   [0, 0, 2, 1],
//   [0, 0, 0, 1],
//   [0, 0, 0, 0],
// ];
console.log(inputProcessing(['7', '0 0', '0 1', '2 2', '0 -2', '2 -2', '2 -1', '2 1', '2', '1 3']));
// [
//   [0, 1, 1, 2],
//   [0, 0, 2, 1],
//   [0, 0, 0, 1],
//   [0, 0, 0, 0],
// ];
// [
//   [0, 2, 4, 2, 4, 3, 3],
//   [0, 0, 2, 4, 6, 5, 3],
//   [0, 0, 0, 6, 4, 3, 1],
//   [0, 0, 0, 0, 2, 3, 5],
//   [0, 0, 0, 0, 0, 1, 3],
//   [0, 0, 0, 0, 0, 0, 2],
//   [0, 0, 0, 0, 0, 0, 0],
// ];
// [
//   [0, 1, 4, 2, 4, 3, 3],
//   [0, 0, 3, 3, 5, 4, 2],
//   [0, 0, 0, 6, 4, 3, 1],
//   [0, 0, 0, 0, 2, 3, 5],
//   [0, 0, 0, 0, 0, 1, 3],
//   [0, 0, 0, 0, 0, 0, 2],
//   [0, 0, 0, 0, 0, 0, 0],
// ];
