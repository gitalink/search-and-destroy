'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if(array.length === 1) {
		if(target === array[0]){
			return true
		} else {
			return false
		}
	}
	const first = array.slice(0, Math.floor(array.length/2))
	const second = array.slice(Math.floor(array.length/2))

	if(second[0]>target){
		return binarySearch(first, target)
	}else{
		return binarySearch(second, target)
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/



module.exports = binarySearch
