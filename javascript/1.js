/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters,
 */

function isUniqueCharacters(str) {
    
    // using set to store only unique chars
    let set = new Set();

    // loop through the string and store it to set
    for (let i=0; i<str.length; i++) {
        set.add(str[i]);
    }

    return str.length === set.size ? true : false
}

console.log(isUniqueCharacters('javascript'));
console.log(isUniqueCharacters('question'));

/**
 * Sample Input 1: javascript
 * Sample Output 1: false
 * 
 * Sample Input 2: question
 * Sample Output 2: true
 */
