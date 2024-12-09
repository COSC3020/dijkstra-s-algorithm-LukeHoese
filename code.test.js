const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const graph1 = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};
const d1 = dijkstra(graph1, 'A');
assert(JSON.stringify(d1) == JSON.stringify({A: 0, B: 1, C: 3, D: 4}));

const graph2 = {};
const d2 = dijkstra(graph2, 'A');
assert(JSON.stringify(d2) == JSON.stringify({}));

const graph3 = {
    A: {}
};
const d3 = dijkstra(graph3, 'A');
assert(JSON.stringify(d3) == JSON.stringify({A: null}));
    
const graph4 = {
    A: { B: 1 },
    B: { A: 1 },
    C: { D: 2 },
    D: { C: 2 }
};
const d4 = dijkstra(graph4, 'A');
assert(JSON.stringify(d4) == JSON.stringify({A: 0, B: 1, C: Infinity, D: Infinity}));
