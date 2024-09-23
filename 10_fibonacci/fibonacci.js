const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    if (number == 0) return 0;
    let array = [1, 1];
    for (let i = 2; i < number; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }
    return array[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
