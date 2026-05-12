function Node (value) {
    return {
        value,
        left : null,
        right : null
    }
}

function Tree (array) {
    let root = null
    array = [...new Set(array)]
    array.sort((a, b) => a - b)

    function _buildTree (arr, start, end) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2)
        const newNode = Node(arr[mid])

        newNode.left = _buildTree(arr, start, mid - 1)
        newNode.right = _buildTree(arr, mid + 1, end)

        return newNode
    }

    root = _buildTree(array, 0, array.length - 1)

    const prettyPrint = (node = root, prefix = '', isLeft = true) => {
        if (node === null || node === undefined) {
            return;
        }

        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }

    function includes (value, node = root) {
        if (node === null) return false
        if (value === node.value) return true

        if (value < node.value) {
            return includes(value, node.left)
        } else if (value > node.value) {
            return includes(value, node.right)
        }

        return false
    }

    function insert(value, node = root) {
        if (node === null) return
        if (value === node.value) return

        if (value < node.value) {
            if (node.left === null) node.left = Node(value)
            else insert(value, node.left)
        } else {
            if (node.right === null) node.right = Node(value)
            else insert(value, node.right)
        }
    }

    function _getSuccessor(curr) {
        curr = curr.right
        while (curr !== null && curr.left !== null)
            curr = curr.left
        return curr
    }

    function deleteItem (value, node = root) {
        if (node === null) return

        if (value < node.value) {
            node.left = deleteItem(value, node.left)
        } else if (value > node.value) {
            node.right = deleteItem(value, node.right)
        } else {
            if (node.left === null) {
                return node.right
            } else if (node.right === null) {
                return node.left
            }

            const succ = _getSuccessor(node)
            node.value = succ.value
            node.right = deleteItem(succ.value, node.right)
        }
        return node
    }

    function levelOrderForEach (callback) {
        if (typeof callback !== "function") throw new Error('callback function is required')
        if (root === null) return 

        let iterator_array = [root]

        while (iterator_array.length > 0) {
            const extract = iterator_array.shift()
            callback(extract.value)

            if (extract.left !== null) iterator_array.push(extract.left)
            if (extract.right !== null) iterator_array.push(extract.right)
        }
    }

    function inOrderForEach (callback) {
        if (typeof callback !== "function") throw new Error('callback function is required')
        if (root === null) return 

        function innerOrder (node = root) {
            if (node.left !== null) innerOrder(node.left)
            callback(node.value)
            if (node.right !== null) innerOrder(node.right)
            }

        innerOrder(root)
    }

    function preOrderForEach (callback) {
        if (typeof callback !== "function") throw new Error('callback function is required')
        if (root === null) return 

        let itr_arr = [root]

        while (itr_arr.length > 0) {
            const ext = itr_arr.pop()
            callback(ext.value)

            if (ext.right !== null) itr_arr.push(ext.right)
            if (ext.left !== null) itr_arr.push(ext.left)
        }
    }

    function postOrderforEach (callback) {
        if (typeof callback !== "function") throw new Error('callback function is required')
        if (root === null) return 

        function postOrder (node = root) {
            if (node.left !== null) postOrder(node.left)
            if (node.right !== null) postOrder(node.right)
            callback(node.value)
            }

        postOrder(root)
    }

    function depth (value) {
        if (root === null) return undefined

        let level = 0
        let currNode = root
        while (currNode.value !== value) {
            if (value < currNode.value) {
                level++
                currNode = currNode.left
            } else if (value > currNode.value) {
                level++
                currNode = currNode.right
            }
            if (currNode === null) return undefined
        }
        return level

    }

    function _longestChild (node) {
        if (node === null) return
        if (node.left === null && node.right === null) return 0
        let left = 0
        let right = 0
        if (node.left !== null) left = _longestChild(node.left)
        if (node.right !== null) right = _longestChild(node.right)

        return 1 + Math.max(left, right)
    }

    function height (value) {
        if (root === null) return undefined

        let currNode = root
        while (value !== currNode.value) {
            if (value < currNode.value) currNode = currNode.left
            else if (value > currNode.value) currNode = currNode.right

            if (currNode === null) return undefined
        }

        const level = _longestChild(currNode)
        return level
    }

    function isBalanced (node = root) {
        if (node === null) return true

        let left = -1
        let right = -1

        let rightCheck = true
        let leftCheck = true
        if (node.left !== null) {
            leftCheck = isBalanced(node.left)
            left = _longestChild(node.left)
        }

        if (node.right !== null) {
            rightCheck = isBalanced(node.right)
            right = _longestChild(node.right)
        }
        
        if (rightCheck === false || leftCheck === false) return false
        if ((left - right) === 0 || (left - right) === 1 || (left - right) === -1) return true
        else return false
    }

    function reBalance () {
        if (root === null) return null

        let oldArray = []
        function pusher (element) {
            oldArray.push(element)
        }

        inOrderForEach(pusher)
        root = _buildTree(oldArray, 0, oldArray.length - 1)
    }


    return {
        prettyPrint,
        includes,
        insert,
        deleteItem,
        levelOrderForEach,
        preOrderForEach,
        inOrderForEach,
        postOrderforEach,
        depth,
        height,
        isBalanced,
        reBalance,
    }
}


// Driver

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const tree = Tree(arr)

console.log(tree.includes(23))
console.log(tree.includes(69))

tree.insert(420)
// tree.prettyPrint()

tree.deleteItem(4)
// tree.prettyPrint()

// tree.levelOrderForEach(console.log)
// tree.preOrderForEach(console.log)
// tree.inOrderForEach(console.log)
// tree.postOrderforEach(console.log)

// console.log(tree.depth(5))
// console.log(tree.height(67))
tree.prettyPrint()
console.log(tree.isBalanced())
tree.reBalance()
tree.prettyPrint()
console.log(tree.isBalanced())