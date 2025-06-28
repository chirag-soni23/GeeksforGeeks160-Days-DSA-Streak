class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class Solution {
  correctBST(root) {
    const first = [null]
    const middle = [null]
    const last = [null]
    const prev = [null]

    this.inorder(root, first, middle, last, prev)

    if (first[0] && last[0]) {
      this.swap(first[0], last[0])
    } else if (first[0] && middle[0]) {
      this.swap(first[0], middle[0])
    }
  }

  swap(a, b) {
    const temp = a.data
    a.data = b.data
    b.data = temp
  }

  inorder(root, first, middle, last, prev) {
    if (!root) return

    this.inorder(root.left, first, middle, last, prev)

    if (prev[0] && root.data < prev[0].data) {
      if (!first[0]) {
        first[0] = prev[0]
        middle[0] = root
      } else {
        last[0] = root
      }
    }
    prev[0] = root

    this.inorder(root.right, first, middle, last, prev)
  }
}

function buildSampleTree() {
  const root = new Node(10)
  root.left = new Node(5)
  root.right = new Node(8)
  root.left.left = new Node(2)
  root.left.right = new Node(20)
  
  return root
}

function printInorder(node) {
  if (!node) return
  printInorder(node.left)
  process.stdout.write(node.data + ' ')
  printInorder(node.right)
}

const root = buildSampleTree()
console.log('Before correction:')
printInorder(root)
console.log('\n')

const solver = new Solution()
solver.correctBST(root)

console.log('After correction:')
printInorder(root)
console.log()
