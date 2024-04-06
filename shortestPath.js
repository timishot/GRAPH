const buildGraph = (edges) => {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    // creating a adjacent list
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visted = new Set([nodeA]);
  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === nodeB) return distance;
    for (const neighbour of graph[node]) {
      if (!visted.has(neighbour)) {
        visted.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
  return -1;
};

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

console.log(shortestPath(edges, 'w', 'z')); // -> 2
