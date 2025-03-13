const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  if (!(array === undefined || array.length == 0)){
    array = array.reduce((final, currentNum) => {
      return final + currentNum;
    })
  }
  else {
    return 0
  }
	
  return array;
};

const multiply = function(array) {
  array = array.reduce((final, currentNum) => {
    return final * currentNum;
  })
  return array;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
	let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
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
