'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let array = []
  let node = linkedlist.head

  while(node.next){
    if (array.includes(node.next)){
      return true
    }else{
      array.push(node)
      node=node.next
    }
  }
  return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop