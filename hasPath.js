const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      console.log('i found you');
      return true;
    }
  }

  return false;
};

export default hasPath;
