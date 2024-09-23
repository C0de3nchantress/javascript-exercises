const palindromes = function (word) {
    word = word.toLowerCase();
    word = word.replace(/[^a-zA-Z0-9 / /g]/g, "");
    newWord = "";
    let i = word.length - 1;
    while (i >= 0) {
        newWord += word[i];
        i--;
    }
    return newWord == word;
};

// Do not edit below this line
module.exports = palindromes;
