const fibonacci = function(num) {
    arr = [1, 1]
    if (num == 0){
        return 0;
    }
    if (num <0) {
        return "OOPS";
    } 
    while (arr.length < num){
        const num1 = arr[arr.length - 1];
        const num2 = arr[arr.length - 2];
        arr.push(num1 + num2);
    }
    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
