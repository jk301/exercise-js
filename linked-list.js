export function Node (value = null) {
    return {
        value,
        nextNode : null
    }
}

export function linkedList () {
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
            return 0
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
        if (!head) return undefined
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
        if (val < 0 || !head || typeof val !== "number") return undefined

        let count = 0
        let curr = head
        while (count !== val) {
            if (curr.nextNode === null) return
            curr = curr.nextNode
            count++
        }
        return curr.value
    }

    function contains (val) {
        if (!head) return false

        let curr = head
        while(curr !== null) {
            if (val === curr.value) return true
            curr = curr.nextNode
        }
        return false
    }

    function findIndex (val) {
        if (!head) return -1

        let count = 0
        let curr = head
        while (curr !== null) {
            if (curr.value === val) {
                return count
            }
            count++
            curr = curr.nextNode
        }
        return -1
    }

    function pop () {
        if (!head) return undefined

        let deleted = head.value
        head = head.nextNode
        return deleted
    }

    function toString() {
        if (!head) {
            console.log("its all empty,  head -> ", head)
            return undefined
        }

        let curr = head
        let str = ""
        while (curr !== null) {
            str += `( ${curr.value} ) -> `
            curr = curr.nextNode
        }
        str += `null`
        return str
    }

    function insertAt (index, ...values) {
        if (index < 0) throw new RangeError

        if (index === 0) {
            if (values.length === 0) return
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
        throw new RangeError
    }

    function removeAt (index) {
        if (!head) return undefined
        if (index < 0) throw new RangeError

        if (index === 0) {
            let removed = head.value
            head = head.nextNode
            return removed
        }

        let count = 0
        let curr = head
        let last = null

        while (curr !== null) {
            if (count === index) {
                last.nextNode = curr.nextNode
                return curr.value
            }
            count++
            last = curr
            curr = curr.nextNode
        }
        throw new RangeError
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
        removeAt,
    }
}
