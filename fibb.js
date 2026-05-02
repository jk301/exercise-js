function fib_normal (num) {
    const array = [0, 1]
    if (num === 1) return [array[0]]
    console.log("hello")
    for (let i = 0; i < num - 2; i++) {
        array.push(array[i] + array[i + 1])
    }
    return array
}

console.log(fib_normal(8))
