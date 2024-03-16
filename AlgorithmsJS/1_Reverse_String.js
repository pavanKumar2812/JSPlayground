/* 
--- Directions
Given a string, return a new string with the reversed order of characteres
--- Example
Reverse('hi') === 'ih'
Reverse('hello') === 'olleh'
*/

// -- Solution: 1

// function Reverse(str) 
// {
//     let Reversed = '';

//     for(let i=0; i<str.length; i++)
//     {
//         Reversed = str[i] + Reversed;
//     }

//     return Reversed
// };

// -- Solution: 2

// function Reverse(str)
// {
//     let Reversed = ''

//     for(let char of str)
//     {
//         Reversed = char + Reversed
//     }

//     return Reversed
// }

// -- Solution: 3 

// function Reverse(str)
// {
//     const StrToArray = str.split('');

//     StrToArray.reverse()

//     return StrToArray.join('')
// } 

function Reverse(str) { return str.split('').reverse().join('') }

console.log(Reverse('hello'));