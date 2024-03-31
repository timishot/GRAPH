const obj = { key: 'value' };

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

for (const neighbour in graph) {
  if (Object.prototype.hasOwnProperty.call(graph, neighbour)) {
    console.log('understand');
  } else {
    console.log('time up');
  }
}
// Check if obj has own property 'key'
if (Object.prototype.hasOwnProperty.call(obj, 'key')) {
  console.log('Object has own property "key"');
} else {
  console.log('Object does not have own property "key"');
}