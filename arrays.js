var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
    newArray = array.slice
    newArray.push(element)
   return newArray
}

function destructivelyAddElementToBeginningOfArray(xRay, newEl) {
  xRay.unshift(newEl)
 return xRay

}

function addElementToEndOfArray(xRay, element){
  newArray = xRay;
  newArray.push(element);
  return newArray
  
}
function accessElementInArray(xRay, index) {
  return xRay[index]
}

function destructivleyRemoveElementToBeginningOfArray (xRay) {
  xRay.shift();
  return xRay;
}

function removeElementFromBeginningOfArray (xRay){
  return xRay.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(xRay) {
  xRay.pop()
  return xRay;
}

function removeElementFromEndOfArray(xRay){
  return xRay.slice(0, xRay.length - 1);
}

