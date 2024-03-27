const breadthFistPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};
// the graph used
const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

breadthFistPrint(graph, 'a');
