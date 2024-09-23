const removeFromArray = function(array) {
    for(let i = 1; i < arguments.length; i++) {
        let val = arguments[i];
        for (let i = 0; i < array.length; i++) {
            if (array[i] === val) {
                array.splice(i, 1);
                i -= 1;
            }
        }
    }
    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
