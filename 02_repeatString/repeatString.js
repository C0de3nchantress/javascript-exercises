const repeatString = function(word, numberOfTimes) {
    finalWord = "";
    if (numberOfTimes < 0) {
        return "ERROR";
    }
    for (i = 0; i < numberOfTimes; i++) {
        finalWord += word; 
    }
    return finalWord;   
};

// Do not edit below this line
module.exports = repeatString;
