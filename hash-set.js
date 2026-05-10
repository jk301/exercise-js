
// use this when accesing bucket through index (Update : didn't need it)
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }

export function HashSet () {
    const loadFactor = 0.75
    let capacity = 16
    let buckets = new Array(16)

    function _hash(key) {

        let hashCode = 0;

        const primeNumber = 37;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }

        return hashCode;
    }

    function set (key) {
        const hashed = _hash(key)
        if (!buckets[hashed]) {
            buckets[hashed] = [[key]]
        } else {
            const exist = buckets[hashed].find(([k]) => k === key)
            if (exist) {
                return
            } else {
                buckets[hashed].push([key])
            }
        }
        _capCheck()
    }

    function has (key) {
        const hashed = _hash(key)
        if (!buckets[hashed]) {
            return false
        }
        const exist = buckets[hashed].find(([k]) => k === key)
        if (exist) {
            return true
        } else {
            return false
        }
    }

    function remove (key) {
        const hashed = _hash(key)
        
        if (!buckets[hashed]) {
            return false
        }

        let exist = buckets[hashed].find(([k]) => k === key)
        if (exist) {
            buckets[hashed] = buckets[hashed].filter(([k]) => k !== key)
            return true
        } else {
            return false
        }
    }

    function length () {
        let count = 0
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]) {
                for (let pair of buckets[i]) {
                    count++
                }
            }
        }
        return count
    }

    // function clear () {
    //     for (let i = 0; i < buckets.length; i++) {
    //         if (buckets[i]) {
    //             buckets[i] = []
    //         }
    //     }
    // }

    function clear () {
        buckets = new Array(capacity)
    }

    function keys () {
        let keys = []
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]) {
                for (let item of buckets[i]) {
                    keys.push(item)
                }
            }
        }
        return keys
    }


    function _capCheck () {
        const capLimit = capacity * loadFactor
        const buckLength = length()

        if (buckLength > capLimit) {
            const oldBucket = keys()
            capacity *= 2
            buckets = new Array(capacity)

            for (let i of oldBucket) {
                set(i[0])
            }
        }

    }
 
    function seeBucket () {
        return buckets
    }

    return {
        _hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        seeBucket,
    }
}
