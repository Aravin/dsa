/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters,
 * what if you cannot use additional data structure?
 * Assume that string only contains the lowercase letter
 */

 function isUniqueCharacters(str) {
    
    let checker = 0;

    // loop through the string and store it to set
    for (let i=0; i<str.length; i++) {

        let val = str.charCodeAt(i) -  97; // 97 - 'a'.charCodeAt(0)
        let bitVal = 1 << val;

        if ((checker & bitVal) > 0) {
            return false;
        }
        else {
            checker = checker | bitVal;
        }
    }

    return true;
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
