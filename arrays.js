var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
    
    
   
   return myArray.unshift(element)
}

function destructivleAddElementToBeginningOfArray(xRay, newEl) {
 return xRay.unshift(newEl)

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

