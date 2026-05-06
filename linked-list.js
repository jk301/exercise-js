function Node (value = null) {
    return {
        value,
        nextNode : null
    }
}

function linkedList () {
    let head = null

    function append(value) {
        const newNode = Node(value)
        // assign to head if it is the first one
        if (!head) {
            head = newNode
            return
        }
        // assigning nextNode value
        let curr = head
        while(curr.nextNode !== null) {
            curr = curr.nextNode
        }
        // after it has found the last node
        // the new nod is assigned to the nextNode of it
        curr.nextNode = newNode
    }

    function prepend (value) {
        const newNode = Node(value)
        // same case
        if (!head) {
            head = newNode
            return
        }

        newNode.nextNode = head
        head = newNode
    }

    function toString() {
        if (!head) {
            console.log("its all empty,  head -> ", head)
            return
        }

        let curr = head
        let str = ""
        while (curr !== null) {
            str += `(${curr.value}) -> `
            curr = curr.nextNode
        }
        console.log(str)
    }

    return {
        append,
        prepend,
        toString,
    }
}


const list = linkedList()

list.append("dog")
list.append("catto")
list.append("humano")

list.prepend("cell")

list.toString()