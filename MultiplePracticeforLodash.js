//Omar Alvarado
//Working with Lodash.js

const _ = {
 clamp(number, lowerBound, upperBound) {
   let lowerClampedValue = Math.max(number, lowerBound);
   let clampedValue = Math.min(lowerClampedValue, upperBound); 
   return clampedValue;
 },

 inRange(number, start, end) {
   if (end === undefined){
     end = start;
     start = 0;
   }
   else if (start > end) {
     let temp = end;
     end = start;
     start = temp;
   }
   let isInRange;
   if (start <= number && number < end ) {
     isInRange = true;
   }
   else {
     isInRange = false;
   }
   return isInRange;
 },

 words(string){
   let words = string.split(' ');
   return words;
 },

 pad(string, length){

   if (length <= string.length){
     return string;
   }
   
     
     let startPaddingLength = Math.floor((length - string.length) / 2);
     
     let endPaddingLength = length - string.length - startPaddingLength;
     
     let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
     return paddedString;
   
 },

 has(object, key){

   let hasValue = object.hasOwnProperty(key);

   if (hasValue) {
     return true;
   }
   else {
     return false;
   }
   

 },

 invert(object) {

   let invertedObject = {
   }  
   for (let key in object) {
     let originalValue = object[key];
     invertedObject[originalValue] = key;
   }
   return invertedObject;
 },


 findKey(object, predicate){
   for(let key in object){
     let value = object[key];
     let predicateReturnValue = predicate(value);
     if (predicateReturnValue) {
       return key;
     }
   };
   return undefined;
 },

 drop(arr, number){
   if (!number) {
     number = 1;
   }
   let newArr = arr.slice(number);
   return newArr;


 },

 dropWhile(array, predicate){
   const cb = (element, index) => {
     return !predicate(element, index, array);
   };
   let dropNumber = array.findIndex(cb);
   let droppedArray = this.drop(array, dropNumber);
   return droppedArray;
 },

 chunk(arr, size = 1){
   
   let chunkArr = [];

   for (let i = 0; i < arr.length; i += size) {
     let chunk = arr.slice(i, i+size);
     chunkArr.push(chunk);
   }
   return chunkArr;
 }
};




// Do not write or modify code below this line.
module.exports = _;