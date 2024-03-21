// const depthFirstPrint = (graph, source) => {
//     const stack = [ source ];

//     while (stack.length > 0) {
//         const current = stack.pop();
//         console.log(current);

//         for (let neighbor of graph[current]){
//             stack.push(neighbor)
//         }
//     }
// }

const depthFirstPrint = (graph, source) => {
  console.log(source);
  // using recursive function
  for (const neighbor of graph[source]) {
    depthFirstPrint(graph, neighbor);
  }
};
const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

depthFirstPrint(graph, 'a');
