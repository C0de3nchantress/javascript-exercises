const reverseString = function(word) {
    let i = word.length - 1;
    newWord = "";
    while (i >= 0) {
        newWord += word[i];
        i--;
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
