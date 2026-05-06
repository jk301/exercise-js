import { Node, linkedList } from "./linked-list.js";

const list = linkedList()

list.append("dog")
list.append("catto")
list.append("humano")
list.prepend("cell")

console.log(list.toString())
console.log("The size is -> " + list.size())
console.log(`The head is -> ${list.getHead()}`)
console.log(`The tail is -> ${list.getTail()}`)
console.log(`At index 2 the value is -> ${list.at(2)}`)

console.log("Does dog contains in the list ? -> " + list.contains("dog"))
console.log("Does t-rex contains in the list ? -> " + list.contains("t-rex"))
console.log(`The index of dog would be ${list.findIndex("dog")}`)

console.log(list.toString())
console.log(`deleting the head value -> ${list.pop()}`)
console.log(list.toString())


console.log("inserting friends")
list.insertAt(1, "dog's friend", "dog's additional friend")
console.log(list.toString())
console.log("removing additional friends")
list.removeAt(2)
console.log(list.toString())