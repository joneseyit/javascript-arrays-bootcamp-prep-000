var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
    
    array.unshift(element);
   
   return array
}

function destructivelyAddElementToBeginningOfArray(xRay, newEl) {
  xRay.unshift(newEl)
 return xRay

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

