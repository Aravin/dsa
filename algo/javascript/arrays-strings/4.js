/**
 * Palindrome Permutation
 * Given a string, write a function to check if it is 
 * permutation of a palindrom.
 * A palindrome is a word or phases that is the same forwards and backwards.
 * A permutation is a rearrangement of letters.
 * The palindrome does not need to be limited to just dictionary word
 */

function isPalindrome(str) {
    const strLength = str.length;

    for (let i = 0; i < strLength / 2; i++) {
        if (str[i] !== str[strLength - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('tacocat'));
console.log(isPalindrome('atcocta'));
console.log(isPalindrome('notapalindrom'));
