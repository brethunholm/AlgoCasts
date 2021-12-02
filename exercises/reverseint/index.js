// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
// let numberArray = Array.from(n.toString())
// let reversedNum = parseInt(Math.abs(n).toString().split('').reverse().join(''))
// if (numberArray[0] === '-') {
//    reversedNum =  reversedNum * -1
// } return reversedNum
// }

function reverseInt(n) {
    let result;
    result = parseInt(n.toString().split('').reverse().join(''))
  
   return result * Math.sign(n)
 }


module.exports = reverseInt;
