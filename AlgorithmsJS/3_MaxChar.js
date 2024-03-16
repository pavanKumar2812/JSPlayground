/*
--- Directions:
Given a string, return the character that is most commonly used in the string.

--- Examples
MaxChar("Pavan") === "a"
MaxChar("abcccccccccdafccc") === "c"
MaxChar("apple 123111118") === 1
*/

// function MaxChar(str)
// {
//     const CharMap = {}
//     let Max = 0
//     let MaxChar = {}

//     for(let char of str) 
//     {
//         if(CharMap[char]) 
//         {
//             CharMap[char] = CharMap[char] + 1
//         } else {
//             CharMap[char] = 1
//         }
//     }

//     // CharMap output is { P: 1, a: 2, v: 1, n: 1 }

//     Object.entries(CharMap)
//     // [ [ 'P', 1 ], [ 'a', 2 ], [ 'v', 1 ], [ 'n', 1 ] ]

//     for(const [key, value] of Object.entries(CharMap))
//     {
//         // console.log(key, value)
//         // P 1
//         // a 2
//         // v 1
//         // n 1

//         if(value > Max) {
//             Max = value
//             MaxChar = key
//         }
//     }

//     return MaxChar
// }
 
// function MaxChar(str)
// {
//     const CharMap = {}
//     let Max = 0
//     let MaxChar

//     for(let char of str)
//     {
//         if(CharMap[char])
//         {
//             CharMap[char] = CharMap[char] + 1
//         } else {
//             CharMap[char] = 1
//         }
//     }

//     for(let key in CharMap)
//     {
//         if(CharMap[key] > Max) 
//         {
//             Max = CharMap[key]
//             MaxChar = key
//         }
//     }

//     return MaxChar
// }

function MaxChar(str) 
{
    const CharMap = {}
    let Max = 0
    let MaxChar = ""

    for(let char of str)
    {
        CharMap[char] ? CharMap[char] = CharMap[char] + 1 : CharMap[char] = 1
        // or another way
        // CharMap[char] = CharMap[char] + 1 || 1
    }

    for(let key in CharMap)
    {
        if(CharMap[key] > Max) 
        {
            Max = CharMap[key]
            MaxChar = key
        }
    }

    return MaxChar
}

console.log(MaxChar("Pavan"))