function Node (value = null) {
    return {
        value,
        nextNode : null
    }
}

function linkedList () {
    let head = null

    function append (value) {
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

    function size () {
        if (!head) {
            return
        }

        let count = 0
        let current = head
        while (current !== null) {
            count++
            current = current.nextNode
        }
        return count
    }

    function getHead () {
        if (!head) return
        return head.value
    }

    function getTail () {
        if (!head) return 

        let curr = head
        while (curr.nextNode !== null) {
            curr = curr.nextNode
        }
        return curr.value
    }

    function at (val) {
        if (val < 0 || !head || typeof val !== "number") return

        let count = 0
        let curr = head
        while (count !== val) {
            curr = curr.nextNode
            count++
        }
        if (curr === null) return
        return curr.value
    }

    function contains (val) {
        if (!head) return 

        let curr = head
        while(curr !== null) {
            if (val === curr.value) return true
            curr = curr.nextNode
        }
        return false
    }

    function findIndex (val) {
        if (!head) return

        let count = 0
        let curr = head
        while (curr !== null) {
            if (curr.value === val) {
                return count
            }
            count++
            curr = curr.nextNode
        }
        return (-1)
    }

    function pop () {
        if (!head) return

        let deleted = head.value
        head = head.nextNode
        return deleted
    }

    function toString() {
        if (!head) {
            console.log("its all empty,  head -> ", head)
            return
        }

        let curr = head
        let str = ""
        while (curr !== null) {
            str += `( ${curr.value} ) -> `
            curr = curr.nextNode
        }
        str += `null`
        console.log(str)
    }

    function insertAt (index, ...values) {
        if (index < 0) return RangeError

        if (index === 0) {
            let newHead = null
            let last = null

            for (let i = 0; i < values.length; i++) {
                const newValue = Node(values[i])
                if (!newHead) {
                    newHead = newValue
                    last = newValue
                    continue
                } else {
                    last.nextNode = newValue
                    last = newValue
                }
            }

            last.nextNode = head
            head = newHead
            return
        }

        let count = 0
        let curr = head
        while (curr !== null) {
            if (index - 1 === count) {
                let lastInserted = curr
                for (let i = 0; i < values.length; i++) {
                    const newValue = Node(values[i])
                    newValue.nextNode = lastInserted.nextNode
                    lastInserted.nextNode = newValue
                    lastInserted = newValue
                }
                return 1

            }
            count++
            curr = curr.nextNode
        }
        return RangeError
    }

    return {
        append,
        prepend,
        size,
        getHead,
        getTail,
        at,
        contains,
        findIndex,
        pop,
        toString,
        insertAt,
    }
}


// Testing it here (don't want to create addditional files)
// just run this file using node

const list = linkedList()

list.append("dog")
list.append("catto")
list.append("humano")

list.prepend("cell")

list.toString()
console.log("The size is -> " + list.size())
console.log(`The head is -> ${list.getHead()}`)
console.log(`The tail is -> ${list.getTail()}`)
console.log(`At index 2 the value is -> ${list.at(2)}`)

console.log("Does dog contains in the list ? -> " + list.contains("dog"))
console.log("Does t-rex contains in the list ? -> " + list.contains("t-rex"))
console.log(`The index of dog would be ${list.findIndex("dog")}`)

list.toString()
console.log(`deleting the head value -> ${list.pop()}`)
list.toString()


console.log("inserting a few friends")
list.insertAt(1, "dog's friend", "dog's additional friend")
list.toString()