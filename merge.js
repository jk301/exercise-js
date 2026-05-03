function mergeSort (array) {
    if (array.length <= 1) {
        return array
    }
    const right = array.slice(array.length / 2)
    const left = array.slice(0, array.length / 2)

    const mergeLeft = mergeSort(left)
    const mergeRight = mergeSort(right)
    const sortedList = []

    let i = 0
    let k = 0
    let cond = true
    while(cond) {
        if (mergeLeft[i] < mergeRight[k]) {
            sortedList.push(mergeLeft[i])
            i++
        } else if (mergeLeft[i] > mergeRight[k]) {
            sortedList.push(mergeRight[k])
            k++
        } else if (mergeLeft[i] === mergeRight[k]) {
            sortedList.push(mergeLeft[i])
            sortedList.push(mergeRight[k])
            i++
            k++
        }

        if (mergeLeft[i] === undefined) {
            sortedList.push(...mergeRight.slice(k))
            cond = false
        } else if (mergeRight[k] === undefined) {
            sortedList.push(...mergeLeft.slice(i))
            cond = false
        }
    }

    
    return sortedList
}

const arr = [100, 23, 47, 8, 56, 12, 89, 34, 71, 5]

console.log(mergeSort(arr))