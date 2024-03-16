/* 
---Directions
Given an integer, return an integer that is the reverse
ordering of numbers
---Examples
ReverseInt(51) === 15
ReverseInt(981) === 189
ReverseInt(-15) === -51
*/

// Solution 1

// function ReverseInt(Num)
// {
//     let Reversed = "";
//     let NumInString = Num.toString();

//     for(let i=0; i<NumInString.length; i++)
//     {
//         Reversed = NumInString[i] + Reversed
//     }

//     return parseInt(Reversed);
// }

// Solution 2

function ReverseInt(Num)
{
    const Reversed = Num.toString().split('').reverse().join()
    return parseInt(Reversed) * Math.sign(Num)
}

console.log(ReverseInt(-15))