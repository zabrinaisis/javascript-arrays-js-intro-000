var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, e) {
  var newArray = [e, ...a]
  return (newArray)
}

function destructivelyAddElementToBeginningOfArray(a, e) {
  a.unshift(e)
  return (a)
}

function addElementToEndOfArray(a, e) {
  var newArray = [...array, element]
  return (newArray)
}

function destructivelyAddElementToEndOfArray(a, e) {
  array.push(element)
  return (array)
}

function accessElementInArray(array, index) {
  return (array[index])
}

funtion destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return (array)
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return (newArray)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return (array)
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1)
  return (newArray)
}
