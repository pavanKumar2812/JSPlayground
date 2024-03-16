/*
--- Directions:
Given a string, return true if the string is a palindrome or false 
if it is not. Palindrome are strings that form the same word if it is reversed.

--- Examples:
Palindrome("madam") === true
Palindrome("kayak") === true
Palindrome("Pavan") === false
*/

// function Palindrome(str)
// {
//     let Reversed = "";
//     for(let char of str)
//     {
//         Reversed = char + Reversed
//     }

//     return Reversed === str ? true : false
// }

function Palindrome(str) 
{
    return str.split("").reverse().join("") === str ? true : false
}

console.log(Palindrome("Pavan"))
console.log(Palindrome("madam"))
console.log(Palindrome("Madam"))