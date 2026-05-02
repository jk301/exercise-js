function fib_normal (num) {
    const array = [0, 1]
    if (num === 1) return [array[0]]
    if (num < 1) {
        console.log("gimme positiv ints")
        return
    }
    for (let i = 0; i < num - 2; i++) {
        array.push(array[i] + array[i + 1])
    }
    return array
}

function fib_recurse (num, arr = [0, 1]) {
    num = num - 1
    const new_arr = [...arr]
    if (num === 1) return new_arr 

    new_arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return fib_recurse(num, new_arr)
}
