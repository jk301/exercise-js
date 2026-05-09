import { HashMap } from "./hash-map.js";

const test = HashMap()

// Basic set and get
test.set("name", "Alice")
test.set("age", 30)
test.set("city", "London")

// Update existing key
test.set("name", "Bob")
console.log("updated name: " + test.get("name")) 

// Get existing
console.log("getting age: " + test.get("age"))

// Get non-existing
console.log("getting ghost: " + test.get("ghost"))
// Has
console.log("has city: " + test.has("city"))
console.log("has ghost: " + test.has("ghost"))

// Remove
console.log("removing city: " + test.remove("city"))
console.log("getting city after remove: " + test.get("city"))
console.log("removing ghost: " + test.remove("ghost"))

// Length
console.log("length: " + test.length())

// Trigger resize
test.set("a", 1)
test.set("b", 2)
test.set("c", 3)
test.set("d", 4)
test.set("e", 5)
test.set("f", 6)
test.set("g", 7)
test.set("h", 8)
test.set("i", 9)
test.set("j", 10)
console.log("bucket size after resize: " + test.seeBucket().length)

// Data still intact after resize
console.log("getting name after resize: " + test.get("name"))
console.log("getting age after resize: " + test.get("age"))

// Clear
test.clear()
console.log("length after clear: " + test.length())
console.log("getting name after clear: " + test.get("name"))
