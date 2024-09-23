const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
	let finalSum = 0;
  array.forEach(element => finalSum += element);

  return finalSum;
};

const multiply = function(array) {
  let finalSum = array[0];
  let newArr = array.slice(1, array.length)
  newArr.forEach(element => finalSum *= element)

  return finalSum;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  
  let finalSum = 1;

  for (let i = 2; i <= num; i++) {
    finalSum *= i; 
  }

  return finalSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
