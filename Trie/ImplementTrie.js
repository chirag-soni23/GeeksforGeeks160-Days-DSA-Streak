class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  search(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.isEnd;
  }

  isPrefix(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return true;
  }
}

let queries = [
  [1, "abcd"],
  [1, "abc"],
  [1, "bcd"],
  [2, "bc"],
  [3, "bc"],
  [2, "abc"],
];

let trie = new Trie();
let output = [];

for (let [type, word] of queries) {
  if (type === 1) {
    trie.insert(word);
  } else if (type === 2) {
    output.push(trie.search(word));
  } else if (type === 3) {
    output.push(trie.isPrefix(word));
  }
}

console.log(output);
