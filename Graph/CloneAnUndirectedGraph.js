class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

class Solution {
  cloneGraph(node) {
    if (!node) return null;

    const map = new Map();

    function dfs(n) {
      if (map.has(n)) return map.get(n);

      let cloneNode = new Node(n.val);
      map.set(n, cloneNode);

      for (let neighbor of n.neighbors) {
        cloneNode.neighbors.push(dfs(neighbor));
      }

      return cloneNode;
    }

    return dfs(node);
  }
}

let adjList = [[1, 2], [0, 2], [0, 1, 3], [2]];
let nodes = adjList.map((_, idx) => new Node(idx));

for (let i = 0; i < adjList.length; i++) {
  for (let neighbor of adjList[i]) {
    nodes[i].neighbors.push(nodes[neighbor]);
  }
}

let solution = new Solution();
let clonedGraph = solution.cloneGraph(nodes[0]);

function areGraphsEqual(node1, node2) {
  if (node1 === node2) return true;
  if (!node1 || !node2) return false;

  let visited = new Set();

  function dfs(n1, n2) {
    if (visited.has(n1.val)) return true;
    visited.add(n1.val);

    if (n1.val !== n2.val || n1.neighbors.length !== n2.neighbors.length) {
      return false;
    }

    for (let i = 0; i < n1.neighbors.length; i++) {
      if (!dfs(n1.neighbors[i], n2.neighbors[i])) return false;
    }

    return true;
  }

  return dfs(node1, node2);
}

console.log(areGraphsEqual(nodes[0], clonedGraph));
