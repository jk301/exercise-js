import { Node, Tree } from "./BST.js";


// Driver

let arr = []

for (let i = 0; i < 15; i++) {
    arr.push(Math.floor(Math.random() * 100))
}

const tree = Tree(arr)

console.log("Balanced:" + tree.isBalanced())

console.log("\nLevel Order")
tree.levelOrderForEach(console.log)

console.log("\nPre Order")
tree.preOrderForEach(console.log)

console.log("\nPost Order")
tree.postOrderforEach(console.log)

console.log("\nIn Order")
tree.inOrderForEach(console.log)

tree.insert(101)
tree.insert(102)
tree.insert(103)
tree.insert(104)
tree.insert(105)
tree.insert(106)

console.log("\nAfter Unbalancing")
tree.prettyPrint()

console.log("Balanced:", tree.isBalanced())

tree.reBalance()

console.log("\nAfter Rebalancing")
tree.prettyPrint()

console.log("Balanced:", tree.isBalanced())

console.log("\nLevel Order")
tree.levelOrderForEach(console.log)

console.log("\nPre Order")
tree.preOrderForEach(console.log)

console.log("\nPost Order")
tree.postOrderforEach(console.log)

console.log("\nIn Order")
tree.inOrderForEach(console.log)