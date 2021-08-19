// JavaScript Program to print
// count of nodes
// at given level.

let V;
// Pointer to an
// array containing
// adjacency lists
const adj = new Array(1001);
for (let i = 0; i < adj.length; i++) {
  adj[i] = [];
}

function addEdge(v, w) {
  // Add w to v’s list.
  adj[v].push(w);

  // Add v to w's list.
  adj[w].push(v);
}

function BFS(s, l) {
  V = 100;
  // Mark all the vertices
  // as not visited
  const visited = new Array(V);
  const level = new Array(V);

  for (let i = 0; i < V; i++) {
    visited[i] = false;
    level[i] = 0;
  }

  // Create a queue for BFS
  const queue = [];

  // Mark the current node as
  // visited and enqueue it
  visited[s] = true;
  queue.push(s);
  level[s] = 0;
  let count = 0;
  while (queue.length != 0) {
    // Dequeue a vertex from
    // queue and print it
    s = queue[0];
    queue.shift();

    const list = adj[s];
    // Get all adjacent vertices
    // of the dequeued vertex s.
    // If a adjacent has not been
    // visited, then mark it
    // visited and enqueue it
    for (let i = 0; i < list.length; i++) {
      if (!visited[list[i]]) {
        visited[list[i]] = true;
        level[list[i]] = level[s] + 1;
        queue.push(list[i]);
      }
    }

    count = 0;
    for (let i = 0; i < V; i++) if (level[i] == l) count++;
  }
  return count;
}

// Driver code

// Create a graph given
// in the above diagram
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 3);
addEdge(2, 4);
addEdge(2, 5);

const level = 2;
console.log(BFS(0, level));

// This code is contributed by unknown2108
