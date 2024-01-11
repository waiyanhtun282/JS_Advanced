// In Programming recursive function occurs when a function calls itself;

// Any iterator function (ask function with a loop) can be recursive fuction

// iterator function


const iteratorTwo =(num =1) =>{
    while(num <= 10){
        console.log(num);
        num++;
    }
}
// console.log(iteratorTwo());


// recursice function is 2 parts
// 1 rescursive call the function
// 2 at least one condition is least exit

const recurToTen =(num=1) =>{
    if(num > 10) return;
    console.log(num);
    num++;
    recurToTen(num);    
}
// recurToTen();

// "With Great Power Comes Great Responsibility"
// Reasons to use (not abuse) Recursion
// 1) Less Code
// 2) Elegant Code (aka Pleasing to Look at)
// 3) Increased Readability

// Reasons to NOT use Recursion
// 1) Performance
// 2) Possibly more difficult to debug (aka follow the logic)
// 3) Is the Readability Improved?


// The Standard Example: The Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.


// Without Recursion
const Fibonacci =(num,array=[0,1]) =>{
    while(num > 2){
       const [nextLast,Last] =array.slice(-2);
       array.push(nextLast+Last);
       num -=1;
    }
    return array;
}

// console.log(Fibonacci(12));
// With Recursion

const fib =(num,array=[0,1]) =>{
    if(num<=2) return array;
    const [nextLast,Last] =array.slice(-2);
    // console.log("nextLast",nextLast,'Last',Last);
    return fib(num -= 1,[...array,nextLast+Last]);

}

console.log('with recursion',fib(12));

// RealLife Example

//  1) Continuation Token From an API
const getAwsProductImages = async() =>{
    //  get data fetch api
    if(data.IsIruncated){
        return await getAwsProductImages(
            productId,
            s3,  
            resultArray,
            data.NextContinucationToken
        );
    }
    return resultArray;
}

// 2) A Parser:
// a company directory
// a file directory 
// the DOM - a web crawler
// An XML or JSON data export

// Export from your streaming service like Spotify, YT Music, etc.

const artistsByGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Whitesnake", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal", "Morcheeba", "Chris Stapleton"]
    }
}

const getArtistsNames =(dataObj,array=[]) =>{
  Object.keys(dataObj).forEach(key =>{
    // console.log(key);
    // console.log(Array.isArray(dataObj[key]));
    if(Array.isArray(dataObj[key])){    
        return dataObj[key].forEach(artist =>{
            // console.log("artist",artist);
            array.push(artist)
        });
    }
    // console.log(array);
    getArtistsNames(dataObj[key],array);
  }
  )
  return array;
}

console.log(getArtistsNames(artistsByGenre));


// WedDevCOdy

// function power(number,exponent){
//     debugger;
//     if(exponent===1) return number;
//     return number* power(number,exponent -1)
// }

// console.log(power(2,5));
// power(2,5);
// 2*power(2,4);
// 2*2*power(2,3);
// 2*2*2*power(2,2);
// 2*2*2*2*power(2,1);
// 2*2*2*2*2;

function fibnuce(n){
    debugger;
    if(n===2 || n===1) return 1;
    return fibnuce(n-1) + fibnuce(n-2)
}

console.log(fibnuce(4));