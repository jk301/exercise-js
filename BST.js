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
            if (node.left !== null) {
                innerOrder(node.left)
            }
            callback(node.value)
            if (node.right !== null) {
                innerOrder(node.right)
            }
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

    }


    return {
        _buildTree,
        prettyPrint,
        includes,
        insert,
        deleteItem,
        levelOrderForEach,
        preOrderForEach,
        inOrderForEach,
    }
}


// Driver

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

const tree = Tree(arr)

console.log(tree.includes(23))
console.log(tree.includes(69))

tree.insert(420)
tree.prettyPrint()

tree.deleteItem(4)
tree.prettyPrint()

// tree.levelOrderForEach(console.log)
// tree.preOrderForEach(console.log)
tree.inOrderForEach(console.log)
