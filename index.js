//// Your code here
function mapToNegativize(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * -1)
    }
    return newArray
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray
}

const mapToSquare = array => {
    let newArray = []
    array.forEach(num => newArray.push(num ** 2))
    return newArray
}

const reduceToTotal = (array, start) => {
    let total = !!start ? start : array[0]
    let i = !!start ? 0 : 1
    for(; i < array.length; i++){
        total = array[i] + total
    }
    return total
}

const reduceToAllTrue = (array) => {
    let result = true;
    for(let i = 0; i < array.length; i++) {
        result = (!!result && !!array[i]) ? true : false
    }
    return result
}

const reduceToAnyTrue = (array) => {
    return (array.find( item => item === true)) ? true : false
}


