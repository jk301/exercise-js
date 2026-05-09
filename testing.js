import { HashMap } from "./hash-map.js";

const test = HashMap()

// populate
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
console.log("length at full capacity: " + test.length())
console.log("bucket size at full capacity: " + test.seeBucket().length)

// overwrite existing
test.set('apple', 'green')
test.set('banana', 'brown')
console.log("overwritten apple: " + test.get('apple'))
console.log("overwritten banana: " + test.get('banana'))
console.log("length after overwrite: " + test.length())

// trigger resize
test.set('moon', 'silver')
console.log("length after resize: " + test.length())
console.log("bucket size after resize: " + test.seeBucket().length)

// overwrite after resize
test.set('moon', 'gold')
test.set('lion', 'silver')
console.log("overwritten moon: " + test.get('moon'))
console.log("overwritten lion: " + test.get('lion'))
console.log("length after overwrite: " + test.length())

// test all methods
console.log("get carrot: " + test.get('carrot'))
console.log("has dog: " + test.has('dog'))
console.log("has ghost: " + test.has('ghost'))
console.log("remove frog: " + test.remove('frog'))
console.log("length after remove: " + test.length())
console.log("keys: " + test.keys())
console.log("values: " + test.values())
console.log("entries: " + test.entries())
test.clear()
console.log("length after clear: " + test.length())
