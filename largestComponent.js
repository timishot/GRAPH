const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;

  visited.add(node);
  let size = 1;

  for (const neighbour of graph[node]) {
    size += exploreSize(graph, neighbour, visited);
  }
  return size;
};

const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;
  for (const node in graph) {
    if (Object.prototype.hasOwnProperty.call(graph, node)) {
      const size = exploreSize(graph, node, visited);
      if (size > longest) longest = size;
    }
  }

  return console.log(longest);
};

largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2'],
});

largestComponent({
  1: ['2'],
  2: ['1', '8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2'],
});

largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1'],
});
