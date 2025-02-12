// Check if these words are palindrome

// isPalindrome("madam");    // true
//isPalindrome("hello");    // false
//isPalindrome("racecar");  // true

//1. Solition
function isPalindrome(word){
    let wordLowerCase = word.toLowerCase();
    let reversedWord = wordLowerCase.split("").reverse().join("");
    return wordLowerCase === reversedWord;
}

const word1 = isPalindrome("Mariana"); // true
console.log("Word1: ", word1);

const word2 = isPalindrome("radar"); // false
console.log("Word2: ", word2);

const word3 = isPalindrome("noon"); // true
console.log("Word3: ", word3);

// 2. Another solution is to use
function isPalindrome1(word){
    return word === word.split("").reverse().join("");
}

const word4 = isPalindrome1("madam"); 
console.log("Word4: ", word4);// true

//3. another solution more naive way

function isPalindrome2(word){
    let wordCase = word.toLowerCase();
    let wordCase2 = wordCase.split("");
    let wordCase3 = wordCase2.reverse();
    let wordCase4 = wordCase3.join("");
    return wordCase === wordCase4;
}

const word5 = isPalindrome2("Luisa");
console.log("Word5: " ,word5); // false