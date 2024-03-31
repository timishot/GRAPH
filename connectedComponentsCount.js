const explore = (graph, current, visited) => {
  if (visited.has(current)) return false;

  visited.add(current);

  for (const neighbour of graph[current]) {
    explore(graph, neighbour, visited);
  }

  return true;
};

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  // eslint-disable-next-line no-unused-vars
  let count = 0;
  for (const node in graph) {
    if (Object.prototype.hasOwnProperty.call(graph, node)) {
      console.log(visited);
      if (explore(graph, node, visited) === true) {
        count += 1;
      }
    }
  }

  return count;
};

console.log(connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}));
