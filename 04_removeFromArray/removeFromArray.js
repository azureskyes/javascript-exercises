const arrEx = [1, 2, 3, 4];

const removeFromArray = function(arrEx, ...numbers) {
    return arrEx.filter(item => !numbers.includes(item));
};



// Do not edit below this line
module.exports = removeFromArray;

// pseudocode:  initialize array. then,
// initialize function removeFromArray. then, 
// state function : rFA.filter();
// return removeFromArray();