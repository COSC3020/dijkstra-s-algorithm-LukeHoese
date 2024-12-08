const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

let classGraph = [
  [0, 2, 1, 4, 0, 0, 0, 0],
  [0, 0, 1, 0, 10, 2, 0, 0],
  [9, 0, 0, 0, 8, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 4, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0]
];
assert(JSON.stringify(dijkstra(classGraph, 2)) == JSON.stringify([9,11,0,13,8,11,9,14]));
assert(JSON.stringify(dijkstra(classGraph, 4)) == JSON.stringify([18,20,9,7,0,3,1,6]));
//end of example section

let emptyTest = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];
assert(JSON.stringify(dijkstra(emptyTest,0)) == JSON.stringify([0,Infinity,Infinity,Infinity]));
assert(JSON.stringify(dijkstra(emptyTest,2)) == JSON.stringify([Infinity,Infinity,0,Infinity]));

let loopTest = [
  [0, 2, 0, 0],
  [0, 0, 3, 0],
  [4, 0, 0, 1],
  [0, 0, 0, 0]
];
assert(JSON.stringify(dijkstra(loopTest,0)) == JSON.stringify([0,2,5,6]));
assert(JSON.stringify(dijkstra(loopTest,2)) == JSON.stringify([4,6,0,1]));

let oneWayTest = [
  [0, 4, 0, 0],
  [0, 0, 0, 5],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
];

assert(JSON.stringify(dijkstra(oneWayTest, 0)) == JSON.stringify([0, 4, Infinity, 9]));
assert(JSON.stringify(dijkstra(oneWayTest, 2)) == JSON.stringify([Infinity, Infinity, 0, 1]));
