const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};
const { distances, previous } = dijkstra(graph, 'A');
assert(JSON.stringify(distances) == JSON.stringify({A: 0, B: 1, C: 3, D: 4});
assert(JSON.stringify(shortestPath(previous, 'D') == JSON.stringify((4) ['A', 'B', 'C', 'D']);
