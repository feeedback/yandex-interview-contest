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

  const recur = (current, path, ways, visited = new Map()) => {
    // console.log('new recur', { current, path, ways, visited });
    visited.set(current, true);

    for (let index = 0; index < ways; index++) {
      if (!visited.get(index)) {
        console.log({ index, path });

        recur(index, [...path, index], ways - 1, visited);
      }
    }
    console.log(path);
    // recur(current, [...path], ways - 1, visited);
    // console.log('цикл кончился');
  };
  recur(0, [0], cityN);
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
module.exports = inputProcessing;
// inputProcessing(['4', '0 0', '1 0', '0 1', '1 1', '1', '1 4']);
inputProcessing(['7', '0 0', '0 2', '2 2', '0 -2', '2 -2', '2 -1', '2 1', '2', '1 3']);
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
