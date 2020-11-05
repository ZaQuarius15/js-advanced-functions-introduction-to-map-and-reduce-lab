function mapToNegativize(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++ ) {
        newArray.push(-1 * array[i])
    }
    return newArray
}

function mapToNoChange(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i])
    }
    return newArray
}

function mapToDouble(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray
}

function mapToSquare(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] ** 2)
    }
    return newArray
}

function reduceToTotal(arr, start=0) {
    let total = start
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

function reduceToAllTrue (arr) {
    let bool = true
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i] === true) {
            bool = true
        } else {
            bool = false
        }
    }
    return bool
}

function reduceToAnyTrue (arr) {
    let bool = false
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i] === true) {
            bool = true
        }
    }
    return bool
}