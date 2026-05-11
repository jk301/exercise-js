function Node (value) {
    return {
        value,
        left : null,
        right : null
    }
}


// const prettyPrint = (node, prefix = '', isLeft = true) => {
//   if (node === null || node === undefined) {
//     return;
//   }

//   prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
//   console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
//   prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
// }


function Tree (array) {
    let root = null

    function buildTree () {

    }
}

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
arr = [...new Set(arr)]
arr.sort((a, b) => a - b)

const mid = Math.floor((0 + arr.length - 1) / 2)
const nod = Node()
nod.node = arr[mid]
nod.left = arr.slice(0, mid)
nod.right = arr.slice(mid + 1)

console.log(`Full array -> ${arr}`)
console.log("node -> " + nod.node)
console.log("left array -> " + nod.left)
console.log("right array -> " + nod.right)
