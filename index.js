// Your code here //
function mapToNegativize(array){
  const newArr = []
  for(let i = 0; i < array.length; i++){
    newArr.push(array[i] * -1)
  }
  return newArr
}

function mapToNoChange(array){
  const newArr = []
  for(let i = 0; i < array.length; i++){
    newArr.push(array[i])
  }
  return newArr
}

function mapToDouble(array){
  const newArr = []
  for(let i = 0; i < array.length; i++){
    newArr.push(array[i] * 2)
  }
  return newArr
}

function mapToSquare(array){
  const newArr = []
  for(let i = 0; i < array.length; i++){
    newArr.push(array[i] ** 2)
  }
  return newArr
}

function reduceToTotal(array, start = 0){
  for(let i = 0; i < array.length; i++){
    start += array[i]
  }
  return start
}

function reduceToAllTrue(array){
  for(let i = 0; i < array.length; i++){
    if (!array[i]) return false
  }
  return true
}

function reduceToAnyTrue(array){
  for(let i = 0; i < array.length; i++){
    if (array[i]) return true
  }
  return false
}
