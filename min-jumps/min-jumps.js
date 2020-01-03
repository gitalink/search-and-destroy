'use strict';

// Complete this algo
const minJumps = arr => {

  let counter = 0;
  let k = 0;

  for (let i=k; i<=arr.length; i+=k) {
    let element = arr[i]

    if (element < arr.slice(i+1).length) {
      const possibleMoves = arr.slice(i+1, i+1+element).map((element, index) => {return element+index})

      let maxMove = possibleMoves[0]
      let maxMoveIndex = 0
      for (let j = 1; j < possibleMoves.length; j++) {
        if (possibleMoves[j] > maxMove) {
          maxMove = possibleMoves[j]
          maxMoveIndex = j
        }
      }
      k = maxMoveIndex+1;
      counter +=1
    }
    else {
      counter +=1;
      break;
    }
  }
  return counter;
};

module.exports = minJumps
